import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../api"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


export default function PorductDetailPage() {
    useAuth();

    const { id } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(() => {

        getProduct(id)
        .then((product) => {
            setProduct(product)
            console.log(product)
        })
        .catch((error) => {
            toast.error("Error al obtener el producto");
            console.error("[getProduct error]", error)
        })
    }, [id])

    return (
        <main className="flex  flex-col ">
            <h1 className="text-4xl font-semibold text-center p-2">{product.brand}</h1>
            <div className="flex flex-col w-full justify-center md:flex-row">
            <img className="max-w-lg" src={product.thumbnail} alt={product.title} />
            <div className="flex flex-col justify-center">
                <div className="p-4 border-b-2">
                <h2>{product.title}</h2>
                <p>Código de Producto: {product.sku}</p>
                <p>Calificación: ⭐️{product.rating}</p>       
                </div> 
                <div className="p-4 mb-9 border-b-2  flex flex-col">
                    <p className="p-4">$ {product.price}</p>
                    <button className="bg-teal-500 text-black p-2 hover:bg-teal-300 rounded">Comprar</button>
                </div>
                <div>
                    <p>🚛 Envio: {product.shippingInformation}</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="p-2">Detalle del producto</h3>
                <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">{product.description}</p>
                <h3 className="p-2">Especificaciones</h3>
                <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">Categoria: {product.category}</p>
                <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">Dimensiones: Profundidad: {product.dimensions ? product.dimensions.depth : 'No disponible'}, 
                    Ancho: {product.dimensions ? product.dimensions.width : 'No disponible'}, Altura: {product.dimensions ? product.dimensions.height : 'No disponible'}</p>
                    <div className="flex justify-center">
                    <Link to='/productos' className="bg-teal-500 text-black p-2 hover:bg-teal-300 rounded text-center mt-4 w-full max-w-sm">Volver</Link>
                    </div>

            </div>
        </main>
    )
}