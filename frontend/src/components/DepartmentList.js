// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function DepartmentList() {
//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/departments')
//       .then(res => setDepartments(res.data.departments))
//       .catch(err => console.error('Error loading departments', err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Departments</h1>
//       <ul className="space-y-2">
//         {departments.map(dept => (
//           <li key={dept.id}>
//             <Link to={`/departments/${dept.id}`} className="text-blue-600 hover:underline">
//               {dept.name} ({dept.product_count})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DepartmentList;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/departments')
      .then(res => setDepartments(res.data.departments))
      .catch(err => console.error('Error loading departments', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Departments</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {departments.map(dept => (
          <Link
            key={dept.id}
            to={`/departments/${dept.id}`}
            className="border p-4 rounded shadow text-center hover:bg-blue-100 transition-all"
          >
            <h2 className="font-semibold">{dept.name}</h2>
            <p className="text-gray-500 text-sm">{dept.product_count} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DepartmentList;
