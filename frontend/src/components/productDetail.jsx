


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <div className="text-center mt-10">Product not found</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Link to="/" className="text-blue-500 underline">← Back</Link>
      <h1 className="text-2xl font-bold mt-4 mb-2">{product.name}</h1>
      <p className="text-gray-600">{product.category} | {product.department}</p>
      <p className="mt-2 font-semibold">Brand: {product.brand}</p>
      <p className="text-blue-600 font-bold mt-1">
        ₹ {product.retail_price || product.price || product.cost}
      </p>
      <p className="mt-2 text-sm">SKU: {product.sku}</p>
    </div>
  );
}

export default ProductDetail;



