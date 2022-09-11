import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}