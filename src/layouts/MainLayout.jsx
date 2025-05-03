import { Link, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: "/", label: "Home", authRequired: false },
  { to: "/productos", label: "Products", authRequired: true },
  { to: "/login", label: "Login", authRequired: false },
];

export default function MainLayout() {
  const isAuth = !!localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white/70 shadow-md px-6 py-4 flex gap-4 justify-center items-center text-lg font-medium">
        {links.map(({ to, label, authRequired }) => {
          if (authRequired && !isAuth) return null;
          if (isAuth && to === "/login") return null;

          return (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              {label}
            </Link>
          );
        })}

        {isAuth && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded hover:bg-red-100 text-red-600 transition-colors"
          >
            Logout
          </button>
        )}
      </nav>

      {/* CONTENT */}
      <section className="flex-grow p-6">
        <Outlet />
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-400 text-white text-center py-4"></footer>
    </main>
  );
}
