// import React from 'react'
import { useState, useEffect } from 'react';

export default function TestingApi() {
//     const [prod, setProd] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:3000/prod')

//       .then(response => response.json())
//       .then(data => setProd(data)); 

//   }, []);

const [status, setStatus] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://barterstyle-backend.onrender.com/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      setError(error.message);
    }
  };

  fetchData();
}, []);


  return (

<div>
{status === 'ok' ? (
  <p>Backend sedang berjalan!</p>
) : (
  <p>Terjadi kesalahan: {error}</p>
)}

    
</div>
  )
}
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



