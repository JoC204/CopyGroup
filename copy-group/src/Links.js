import GalleryEmpresa from './components/Galleries/GalleryEmpresa';
import GalleryServices from './components/Galleries/GalleryServices';
// import Products from './components/Products';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Careers from './components/Careers';
// import FAQ from './components/FAQ';
// import Support from './components/Support';
import CopyLogo from './components/CopyLogo';

export const Link = [
  { path: '/', label: 'Home', component: CopyLogo },
  { path: '/empresa', label: 'Empresa', component: GalleryEmpresa },
  { path: '/services', label: 'Services', component: GalleryServices },
  // { path: '/products', label: 'Products', component: Products },
  // { path: '/blog', label: 'Blog', component: Blog },
  // { path: '/contact', label: 'Contact', component: Contact },
  // { path: '/careers', label: 'Careers', component: Careers },
  // { path: '/faq', label: 'FAQ', component: FAQ },
  // { path: '/support', label: 'Support', component: Support },
];
