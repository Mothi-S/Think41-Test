



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <Link
//             to={`/product/${product.id}`}
//             key={product.id}
//             className="border p-4 rounded-lg shadow hover:shadow-xl transition duration-200 bg-white"
//           >
//             <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
//             <p className="text-sm text-gray-500 mb-1">{product.category}</p>
//             <p className="text-blue-600 font-bold text-md">₹ {product.retail_price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;



import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Link to="/departments" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Departments
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition-all"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-blue-600 font-bold">₹ {product.retail_price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
