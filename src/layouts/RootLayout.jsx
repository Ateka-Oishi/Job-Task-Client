import { Outlet } from "react-router-dom";
import PrimaryHeader from "../components/shared/PrimaryHeader/PrimaryHeader";
import Footer from "../components/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <header className="sticky md:top-3 z-50">
        <PrimaryHeader />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
