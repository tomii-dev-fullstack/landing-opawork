import { lazy, Suspense } from "react";

import Footer from "../components/Footer";
import { Styles } from "../styles/styles";
import { Route, Routes } from "react-router";

// Importar los componentes de manera explícita
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/authentication/signin"));
const SignUp = lazy(() => import("../pages/authentication/signup"));

const Rutas = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Styles />
  
      <Routes>
        <Route path="/" element={<Home />} />
      {/*   <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </Suspense>
  );
};    

export default Rutas;

