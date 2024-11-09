import React from 'react';
import img from '../assets/shirt.png'


function StylishShield() {

    const weatherData = [
        { day: 'Senin', temp: 21 },
        { day: 'Selasa', temp: 18 },
        { day: 'Rabu', temp: 25 },
        { day: 'Kamis', temp: 27 },
        { day: 'Jumat', temp: 30 },
        { day: 'Sabtu', temp: 28 },
        { day: 'Minggu', temp: 32 },

      ];


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Prakiraan Cuaca</h1>

      <div className="grid sm:grid-cols-7 gap-12 max-w-4xl mx-auto ">
  {weatherData.map((day, index) => (
    <div key={index} className="text-center p-2 border border-gray-200 rounded w-full sm:w-28">
      <p>{day.day}</p>
      <p>{day.temp}°C</p>
    </div>
  ))}
</div>


      <h2 className="text-2xl font-bold mt-8">Cuaca Saat Ini</h2>
      <div className="flex items-center gap-4 mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707A1 1 0 0113.178 5h-2.356a1 1 0 01-.707-.707L9.663 3m12 14V8m-9 4h6m-6 4H5m14 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
        <div>
          <p>Temperatur: 26°C - Hangat</p>
          <p>Curah Hujan: 20% - Sedikit peluang hujan</p>
          <p>Kecepatan Angin: 15 km/jam - Angin sedang</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Rekomendasi Pakaian</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
  <div className="text-center">
    <img src={img} alt="Kaos" className="w-full sm:w-24 h-auto" />
    <p className="text-sm sm:text-base">Kenakanlah kaos atau kemeja lengan pendek berbahan ringan dan berpori-pori besar untuk sirkulasi udara yang baik</p>
  </div>
  {/* Card lainnya */}
</div>
    </div>
  );
}

export default StylishShield;