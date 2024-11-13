// import React from 'react'
// import { useState, useEffect } from 'react';

// export default function TestingApi() {
//     const [prod, setProd] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:3000/prod')

//       .then(response => response.json())
//       .then(data => setProd(data)); 

//   }, []);
//   return (
//     <div>
//       <h1>Daftar API</h1>
//       <ul>
//         {prod.map(prods => (
//           <li key={prods.d}>{prods.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


