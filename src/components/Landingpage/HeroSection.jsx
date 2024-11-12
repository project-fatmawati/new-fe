import React from 'react';
import Hero from '../../assets/hero-image.png';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 

function HeroSection() {
  const { isLoggedIn, username } = useAuth(); 
  const navigate = useNavigate(); 


  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/katalog'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <section className={isLoggedIn ? "bg-teal py-16 px-3 text-white" : "bg-teal py-16 px-3"}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          {isLoggedIn ? (
           
            <>
              <h1 className="text-6xl text-white font-bold py-5">Halo, selamat datang {username}!</h1>
              <p className="mt-6 text-xl text-black">
                Jadilah bagian dari Gerakan Fashion Berkelanjutan. Tukarkan Pakaianmu, Perbarui Gaya, dan Selamatkan Bumi.
              </p>
              <button 
                onClick={handleButtonClick} 
                className="bg-mustard hover:brightness-110 rounded-lg text-black text-lg mt-8 px-6 py-3 font-bold"
              >
                Mulai Tukar
              </button>
            </>
          ) : (
            <>
              <h1 className="text-6xl text-white font-bold py-5">Rajanya Barter Pakaian, Siap Tukaran.</h1>
              <p className="mt-6 text-xl text-black">
                Jadilah bagian dari Gerakan Fashion Berkelanjutan. Tukarkan Pakaianmu, Perbarui Gaya, dan Selamatkan Bumi.
              </p>
              <button 
                onClick={handleButtonClick} 
                className="bg-mustard hover:brightness-110 rounded-lg text-black text-lg mt-8 px-6 py-3 font-bold"
              >
                Mulai Tukar
              </button>
            </>
          )}
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={Hero} alt="Hero Image" className="w-full max-w-md rounded-lg" />
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
