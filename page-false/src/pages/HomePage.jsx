import PageSection from "../components/PageSection"

export default function HomePage () {
    return (
        <>
        <div className="flex justify-center items-center flex-col w-full min-h-dvh ">
        <h1 className="text-4xl font-bold text-center p-4">Fake Store</h1>
        <p className="text-center" > Bienvenido</p>
        <PageSection className={"bg-red-300"} title={"Un titulo"} contentClassName={"bg-teal-300"}>
            <h2>Vendemos de todo</h2>
        </PageSection>
        <PageSection>
            <div className="w-full grid grid-cols-2 gap-2">
            <img src="https://static.vecteezy.com/system/resources/previews/015/131/858/non_2x/flat-cartoon-style-shop-facade-front-view-modern-flat-storefront-or-supermarket-design-png.png" alt="" />
            <p>Hola soy un texto</p>
            </div>
        </PageSection>
    </div>
    </>
    )
}