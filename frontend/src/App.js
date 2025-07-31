

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from "./components/productList";
// import ProductDetail from "./components/productDetail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import ProductDetail from "./components/productDetail";
import DepartmentList from './components/DepartmentList';
import DepartmentProducts from './components/DepartmentProducts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/departments/:id" element={<DepartmentProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
