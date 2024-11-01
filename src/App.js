import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Home />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
