import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/authPage";
import Items from "./pages/homePage";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<ProtectedRoute element={<Items />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
