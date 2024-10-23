import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="py-4 h-16">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="text-center py-4 mt-auto h-16 flex items-center justify-center text-orange-100 bg-neutral-900">
        <Footer />
      </footer>
    </div>
  );
}
