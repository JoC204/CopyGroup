import Empresa from "./components/ListMenu/Empresa";
import Services from "./components/ListMenu/Services";
// import Products from "./components/ListMenu/Products";
import Materials from "./components/ListMenu/Materials";
// import Posters from "./components/ListMenu/Posters";
import Plots from "./components/ListMenu/Plots";
// import Proyect from "./components/ListMenu/Proyect";
import Contact from "./components/ListMenu/Contact";
import CopyLogo from "./components/CopyLogo";

export const Link = [
  { path: "/", label: "Home", component: CopyLogo },
  { path: "/empresa", label: "Empresa", component: Empresa },
  { path: "/services", label: "Servicios", component: Services },
  // { path: "/products", label: "Productos", component: Products },
  { path: "/materials", label: "Materiales", component: Materials },
  // { path: "/posters", label: "Carteles", component: Posters },
  { path: "/plots", label: "Ploteos", component: Plots },
  // { path: "/proyect", label: "Proyectos", component: Proyect },
  { path: "/contact", label: "Contacto", component: Contact },
  // { path: "/", label: "", component: CopyLogo },
  // { path: "/", label: "", component: CopyLogo },
  // { path: "/", label: "", component: CopyLogo },
];
