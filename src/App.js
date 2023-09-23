
import NavBar from "./components/NavBar/NavBar.jsx"
import { DataProvider } from "./context/ApiContext.jsx";
import { CardProvider } from "./context/CardContext.jsx";


import './App.css';
import { AppRoutes } from "./AppRoutes.jsx";

function App() {
  return <>
    <DataProvider>
      <CardProvider>
        <NavBar />
        <AppRoutes />
      </CardProvider>
    </DataProvider>
  </>
}

export default App;
