import styles from "./App.module.css";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import imgBackdrop from "./assets/img/10-04.jpg";

function App() {
  return <Backdrop img={imgBackdrop}></Backdrop>;
}

export default App;
