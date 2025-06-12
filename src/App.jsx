import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
