// import { useParams, Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function DepartmentProducts() {
//   const { id } = useParams();
//   const [department, setDepartment] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/departments/${id}/products`)
//       .then(res => {
//         setDepartment(res.data.department);
//         setProducts(res.data.products);
//       })
//       .catch(err => console.error('Error fetching department products', err));
//   }, [id]);

//   return (
//     <div className="p-6">
//       <Link to="/" className="text-blue-500 underline">← Back to All Products</Link>
//       <h1 className="text-2xl font-bold mt-4 mb-2">{department}</h1>
//       <p className="mb-4 text-sm text-gray-500">{products.length} products</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map(p => (
//           <div key={p.id} className="border p-4 rounded shadow">
//             <h2 className="font-semibold">{p.name}</h2>
//             <p className="text-sm text-gray-600">{p.category}</p>
//             <p className="text-blue-600 font-bold">₹ {p.retail_price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DepartmentProducts;


import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DepartmentProducts() {
  const { id } = useParams();
  const [department, setDepartment] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/departments/${id}/products`)
      .then(res => {
        setDepartment(res.data.department);
        setProducts(res.data.products);
      })
      .catch(err => console.error('Error fetching department products', err));
  }, [id]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{department}</h1>
        <Link to="/" className="text-blue-500 underline">← Back to All Products</Link>
      </div>
      <p className="text-sm text-gray-600 mb-4">{products.length} products found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-blue-600 font-bold">₹ {product.retail_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentProducts;
