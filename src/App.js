import { DataProvider } from "./context/ApiContext.jsx";
import { CardProvider } from "./context/CardContext.jsx";
import { AppRoutes } from "./AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import './App.css';

function App() {
  return <>
    <DataProvider>
    <AuthProvider>
      <CardProvider>
          <AppRoutes />
      </CardProvider>
      </AuthProvider>
    </DataProvider>
  </>
}

export default App;
