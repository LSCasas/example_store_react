import PageSection from "../components/PageSection";
import fakeStoreImg from "../assets/fake_store.png";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-dvh bg-white text-gray-800">
        <header className="text-center py-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Fake Store
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted online shop for everything.
          </p>
        </header>

        <PageSection>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            <img
              src={fakeStoreImg}
              alt="Storefront illustration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Why Shop With Us?</h2>
              <p className="text-lg leading-relaxed">
                Shop easily and securely at Fake Store — quality products at
                great prices.
              </p>
            </div>
          </div>
        </PageSection>
      </div>
    </>
  );
}
