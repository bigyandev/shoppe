import { DataProvider } from "./context/ApiContext.jsx";
import { CardProvider } from "./context/CardContext.jsx";
import { AppRoutes } from "./AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import './App.css';


function App() {
  return <>
    <DataProvider>
      <CardProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CardProvider>
    </DataProvider>
  </>
}

export default App;
