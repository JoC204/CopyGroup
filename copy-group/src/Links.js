import Empresa from "./components/ListMenu/Empresa";
import DigitalPrint from "./components/ListMenu/DigitalPrint";
import Serigrafia from "./components/ListMenu/Serigrafia";
// import Rotulados from "./components/ListMenu/Rotulados";
// import ImpresionLona from "./components/ListMenu/ImpresionLona";
import Contact from "./components/ListMenu/Contact";
import CopyLogo from "./components/CopyLogo";

export const Link = [
  { path: "/", label: "Home", component: CopyLogo },
  { path: "/empresa", label: "Empresa", component: Empresa },
  { path: "/serigrafia", label: "Serigrafía", component: Serigrafia },
  {
    path: "/digitalPrint",
    label: "Impresiones Digitales",
    component: DigitalPrint,
  },
  // { path: "/rotulados", label: "Rotulados", component: Rotulados },
  // { path: "/impresionLona", label: "Impresion en Lonas", component: ImpresionLona },
  { path: "/contact", label: "Contacto", component: Contact },
];
