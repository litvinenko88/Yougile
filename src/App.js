import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "../src/hooks/useTheme";

import Logging from "./Pages/Logging/Logging";
import Registration from "./Pages/Registration/Registration";

import Backdrop from "./components/UI/Backdrop/Backdrop";
import imgBackdrop from "./assets/img/10-04.jpg";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <Backdrop img={imgBackdrop}>
      <Routes>
        <Route path="/logging" element={<Logging />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Backdrop>
  );
}

export default App;
