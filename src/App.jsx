import { Route, Routes } from "react-router";
import "./App.scss";
import Container from "./Components/Container";
import Container2 from "./Components/Container2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/test" element={<Container2 />} />
      </Routes>
    </>
  );
}

export default App;
