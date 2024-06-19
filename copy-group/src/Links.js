import GalleryEmpresa from "./components/ListMenu/GalleryEmpresa";
import GalleryServices from "./components/ListMenu/GalleryServices";
import Products from "./components/ListMenu/Products";
import Materials from "./components/ListMenu/Materials";
import Posters from "./components/ListMenu/Posters";
import Plots from "./components/ListMenu/Plots";
import Proyect from "./components/ListMenu/Proyect";
import Contact from "./components/ListMenu/Contact";
import CopyLogo from "./components/CopyLogo";

export const Link = [
  { path: "/", label: "Home", component: CopyLogo },
  { path: "/empresa", label: "Empresa", component: GalleryEmpresa },
  { path: "/services", label: "Servicios", component: GalleryServices },
  { path: "/products", label: "Productos", component: Products },
  { path: "/materials", label: "Materiales", component: Materials },
  { path: "/posters", label: "Carteles", component: Posters },
  { path: "/plots", label: "Ploteos", component: Plots },
  { path: "/proyect", label: "Proyectos", component: Proyect },
  { path: "/contact", label: "Contacto", component: Contact },
  { path: "/", label: "", component: CopyLogo },
  { path: "/", label: "", component: CopyLogo },
  { path: "/", label: "", component: CopyLogo },
];
