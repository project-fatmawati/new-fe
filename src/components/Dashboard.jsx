import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Dashboard = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleChallengeClick = () => {
    navigate("/challenge-detail"); // Navigasi ke halaman detail tantangan
  };

  return (
    <div className="container mx-auto w-[80%] pt-20 px-4">
      <section className=" bg-teal rounded-lg px-8 py-6 pt-[50px] pb-[50px]">
        <h2 className="text-3xl font-bold pb-2">Halo, Yana Udin!</h2>
        <p className="text-xl text-black pb-[50px]">
          Mulai tukarkan baju bekasmu dan selamatkan lingkungan. Satu langkah
          kecil untuk bumi yang lebih hijau!
        </p>
        <div className="flex justify-center gap-[100px]">
          <div className=" bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black ">
              Total Barter
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">10</p>
              <p>Kali Barter</p>
            </div>
          </div>
          <div className="bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black">
              Dampak Lingkungan
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">10</p>
              <p>Pohon Selamat</p>
            </div>
          </div>
          <div className="bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black">
              Poin
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">10</p>
              <p>Poin Reward</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-8">
        <h3 className="text-xl font-bold mb-4">Lanjutkan Barter</h3>
        <div className=" bg-teal rounded-lg shadow-md px-6 py-4 flex justify-between items-center">
          <div className=" flex items-center">
            <div className=" bg-white rounded-lg w-16 h-16 mr-4"></div>
            <div className=" ">
              <h4 className="text-xl"> Tantangan 7 Hari Mengurangi Sampah Fashion</h4>
              <div className=" bg-teal text-white px-2 py-1 rounded-md inline-flex items-center mr-2">
                <svg
                  className="w-4 h-4 mr-1 text-lg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 11a1 1 0 110-2v2zM4 7a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM2 11a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4z"
                    clipRule="evenodd"
                  />
                </svg>
                20 Barter Poin
              </div>
              <div className=" flex items-center">
                <div className="bg-white h-2 rounded-lg w-full relative">
                  <div className=" bg-teal h-full rounded-lg w-1/2"></div>
                </div>
                <span className="ml-2">50%</span>
              </div>
            </div>
          </div>
          <button
            className=" bg-teal text-white px-4 py-2 rounded-md font-bold hover:bg-teal-700"
            onClick={handleChallengeClick}
          >
            Ikuti Tantangan
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
