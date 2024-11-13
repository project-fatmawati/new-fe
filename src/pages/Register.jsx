import {  useState, useContext } from "react";
import {useAuth} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
// import Logo from '../assets/Logo-nav.png';
import Icon from "../assets/clothes-icon.png"; 
import axios from "axios";

function Register() {
  const { regis } = useAuth();
  const navigate = useNavigate();


  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [handphone, setHandphone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [kuota, setKuota] = useState("");

  const [error, setError] = useState(null);


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const userData = {
  //     fullname,
  //     username,
  //     email,
  //     handphone,
  //     address,
  //     password,
  //     kuota,
  //   };

  //   try {
  //     await regis(userData);
  //     alert("Pendaftaran berhasil! Silahkan login menggunakan akun Anda.");
  //     navigate("/Login"); // Redirect to login page
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //     setError("Pendaftaran gagal. Silahkan coba lagi.");
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state jika ada
    
    try {
     
      const userData = {
        fullname,
        username,
        email,
        handphone,
        address,
        password,
        kuota, // Konversi ke number jika diperlukan
      };

      console.log('Data yang akan diregistrasi:', userData);
    
      await regis(userData);
      alert("Pendaftaran berhasil! Silahkan login menggunakan akun Anda.");
      navigate('/Login');
    } catch (error) {
      console.error('Error saat registrasi:', error);
      setError(error.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          {/* Signup Form */}
          <div className="text-center mb-6">
            <img
              src={Icon}
              alt="Logo BarterStyle"
              className="w-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">Pendaftaran Akun</h2>
            <p className="text-gray">Yuk, daftarkan akunmu sekarang juga!</p>
            <div className="mt-4 mb-6 border-t-2 border-gray"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4"  >
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray"
              >
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Nama Lengkap"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full px-4 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label
                htmlFor="user-name"
                className="block text-sm font-medium text-gray"
              >
                Username *
              </label>
              <input
                type="text"
                id="user-name"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label
                htmlFor="email-signup"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email-signup"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div> 
            <div>
              <label
                htmlFor="handphone"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor WhatsApp *
              </label>
              <input
                type="text"
                id="handphone"
                placeholder="Nomor WhatsApp"
                required
                value={handphone}
                onChange={(e) => setHandphone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat *
              </label>
              <input
                type="text"
                id="address"
                placeholder="Alamat"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div>
              <label
                htmlFor="password-signup"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                type="password"
                id="password-signup"
                placeholder="Minimal 6 karakter, 1 huruf besar, 1 huruf kecil, dan 1 angka"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Kuota *
              </label>
              <input
                type="text"
                id="kuota"
                placeholder="Kuota"
                required
                value={kuota}
                onChange={(e) => setKuota(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
                className="form-checkbox h-4 w-4 text-cyan border-gray rounded"
              />
              <span className="text-sm text-gray">
                Saya setuju dengan{" "}
                <Link to="#" className="text-cyan">
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link to="#" className="text-cyan">
                  Kebijakan Privasi
                </Link>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue border-gray rounded"
              />
              <span className="text-sm text-gray">
                Saya ingin berlangganan Newsletter.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-teal text-white font-bold py-2 rounded hover:bg-cyan transition duration-200"
              >
              Daftar
            </button>
          </form>

          <p className=" text-center mt-4 text-sm text-gray">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-cyan">
              Masuk Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
