import {  useState, useContext } from "react";
import {useAuth} from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import Logo from '../assets/Logo-nav.png';
import Icon from "../assets/clothes-icon.png"; 
// import axios from "axios";

function Register() {
  const { regis } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [handphone, setHandphone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [kuota, setKuota] = useState("");
  
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Simpan data pengguna ke localStorage
  //   let users = JSON.parse(localStorage.getItem('users')) || {};
  //   if (users[email]) {
  //     setErrorMessage('Email sudah terdaftar!');
  //     return;
  //   }

  //   users[email] = { userName, handphone, address, password };
  //   localStorage.setItem('users', JSON.stringify(users));

  //   alert('Pendaftaran berhasil!');
  //   navigate("/login"); // Redirect ke halaman login
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);

    try {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("username", userName);
      formData.append("email", email);
      formData.append("handphone",  handphone);
      formData.append("address", address);
      formData.append("password", password);
      formData.append("kuota", kuota); 


      console.log(formData);
      await regis(formData);

      if (response.status !== 200) {
        throw new Error('Gagal mendaftar. Silahkan coba lagi.');
      }
  
      alert('Pendaftaran berhasil!');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    }
  
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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

            {/* <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Konfirmasi Password *</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Konfirmasi Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
              />
              {errorMessage && <p className="text-red text-sm mt-2">{errorMessage}</p>}
            </div> */}

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
