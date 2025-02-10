import { Outlet } from "react-router-dom";
import Headers from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
