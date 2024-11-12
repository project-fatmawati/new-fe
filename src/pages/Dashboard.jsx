import { useNavigate } from "react-router-dom"; 
import challengeIcon from '../assets/clothes-icon.png';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleChallengeClick = () => {
    navigate("/challenge-detail"); // Navigasi ke halaman detail tantangan
  };

  return (
    <div className="container mx-auto px-4 pb-40">
      <section className="bg-teal rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-bold  mb-4">Halo, Yana Udin!</h2>
        <p className="text-lg  text-black mb-8">
          Mulai tukarkan baju bekasmu dan selamatkan lingkungan. Satu langkah kecil untuk bumi yang lebih hijau!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black ">
              Total Barter
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">10</p>
              <p className="font-medium"> Kali Barter</p>
            </div>
          </div>
          <div className="bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black">
              Dampak Lingkungan
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">10</p>
              <p className="font-medium">Pohon Selamat</p>
            </div>
          </div>
          <div className="bg-white text-teal p-6 rounded-lg flex flex-col items-center cursor-pointer">
            <h3 className="text-xl font-bold pb-5 underline text-black">
              Cuaca Hari ini
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <p className=" text-5xl font-bold mb-2">26 C</p>
              <p className="font-medium">Hangat </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-8">
        <h3 className="text-xl font-bold mb-4">Lanjutkan Barter</h3>
        <div className="bg-teal rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center">
        <div className="flex items-center md:mr-4 mb-4 md:mb-0">
            <div className=" bg-white rounded-lg w-16 h-16 mr-4">
            <img src={challengeIcon}  />
            </div>
            <div className=" ">
              <h4 className="text-xl text-white"> Tantangan 7 Hari Mengurangi Sampah Fashion</h4>
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
            className=" bg-black text-cyan px-4 py-2 rounded-md font-bold hover:text-mustard"
            onClick={handleChallengeClick}
          >
            Ikuti Tantangan
          </button>
        </div>
      </section>

      <section className=" mt-8">
        <h3 className="text-xl font-bold mb-4">Stylish Shield</h3>
        <div className="bg-teal rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center">
        <div className="flex items-center md:mr-4 mb-4 md:mb-0">
            <div className=" bg-white rounded-lg w-16 h-16 mr-4"></div>
            <div className=" ">
              <h4 className="text-xl text-white"> Rekomendasi Pakaian Berdasarkan Cuaca</h4>
              <h3 className="text-md text-black"> Dapatkan Pakaian berdasarkan Cuaca hari ini</h3>
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
            </div>
          </div>
          <button
            className=" bg-black text-cyan px-4 py-2 rounded-md font-bold hover:text-mustard"
            onClick={handleChallengeClick}
          >
            Lihat Rekomendasi
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
