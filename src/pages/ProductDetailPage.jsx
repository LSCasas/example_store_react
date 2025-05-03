import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PorductDetailPage() {
  useAuth();

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((error) => {
        toast.error("Error al obtener el producto");
        console.error("[getProduct error]", error);
      });
  }, [id]);

  return (
    <main className="flex  flex-col ">
      <h1 className="text-4xl font-semibold text-center p-2">
        {product.brand}
      </h1>
      <div className="flex flex-col w-full justify-center md:flex-row">
        <img className="max-w-lg" src={product.thumbnail} alt={product.title} />
        <div className="flex flex-col justify-center">
          <div className="p-4 border-b-2">
            <h2>{product.title}</h2>
            <p>Product Code: {product.sku}</p>
            <p>Rating: ⭐️{product.rating}</p>
          </div>
          <div className="p-4 mb-9 border-b-2  flex flex-col">
            <p className="p-4">$ {product.price}</p>
            <button className="bg-[#2ED47A] text-black p-2 hover:bg-[#25ba6b] rounded">
              Buy
            </button>
          </div>
          <div>
            <p>🚛 Shipping: {product.shippingInformation}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="p-2">Product details</h3>
        <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">
          {product.description}
        </p>
        <h3 className="p-2">Specifications</h3>
        <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">
          Category: {product.category}
        </p>
        <p className="w-full max-w-screen-md p-4 justify-center items-center ml-20">
          Dimensions: Depth:{" "}
          {product.dimensions ? product.dimensions.depth : "No disponible"},
          Width:{" "}
          {product.dimensions ? product.dimensions.width : "No disponible"},
          Height:{" "}
          {product.dimensions ? product.dimensions.height : "No disponible"}
        </p>
        <div className="flex justify-center">
          <Link
            to="/productos"
            className="bg-[#2ED47A] text-black p-2 hover:bg-[#25ba6b] rounded text-center mt-4 w-full max-w-sm"
          >
            Go back
          </Link>
        </div>
      </div>
    </main>
  );
}
