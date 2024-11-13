import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/clothes-icon.png";
import { useAuth } from "../context/AuthContext"; 
import axios from "axios";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userData = {
        email: email.trim(),
        password: password
      };
      console.log('Mengirim data:', userData); // Log data yang akan dikirim


      await login(userData);
      
      // Jika login berhasil (tidak ada error), langsung navigate
      console.log('Login berhasil');
      navigate('/');
      
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Terjadi kesalahan saat login');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
          <div className="text-center mb-6">
            <img
              src={Icon}
              alt="BarterStyle Illustration"
              className="mx-auto mb-4 h-20"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              Masuk ke BarterStyle
            </h1>
            <p className="text-gray-600">
              Yuk, tukarkan pakaian kamu di BarterStyle
            </p>
          </div>
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                placeholder="Masukkan email kamu"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Password *
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                placeholder="Masukkan password kamu"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Ingat Saya
              </label>
              <a
                href="/lupa-password"
                className="text-cyan hover:underline text-sm"
              >
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-teal text-white font-bold py-2 rounded hover:bg-cyan transition duration-200 ${
                loading ? 'opacity-50' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'Masuk'}
            </button>
          </form>
          <p className="text-center text-gray mt-6">
            Belum punya akun?{" "}
            <a
              href="/daftar"
              className="text-cyan font-semibold hover:underline"
            >
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
