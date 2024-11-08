import React from "react";
import Logo from '../assets/barterstyle-logo.svg'

function ProfileDetail() {
  return (
    <div className="container mx-auto p-5">
      <div className="py-5">
        <h1 className="text-4xl font-bold">Detail Profil</h1>
      </div>
      <form className="container mx-auto">
        <div className="flex flex-col py-5">
          <label
            htmlFor="profilePic"
            className=" font-medium text-black text-xl"
          >
            Foto Profil
          </label>
          <div className="relative mt-1">
            <img
              id="profilePicPreview"
              src={Logo}
              alt="Preview Foto Profil"
              className="rounded-full h-20 w-20 object-cover"
            />
            <input
              type="file"
              id="profilePic"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(event) => {
                const reader = new FileReader();
                reader.onload = () => {
                  document.getElementById("profilePicPreview").src =
                    reader.result;
                };
                reader.readAsDataURL(event.target.files[0]);
              }}
            />
          </div>
        </div>
        {/* Sisanya input-input lainnya dengan struktur yang sama */}
        <div className="flex flex-col py-5">
          <label
            htmlFor="birthPlace"
            className=" block font-medium text-black text-xl"
          >
            Nama lengkap
          </label>
          <input
            type="text"
            id="birthPlace"
            name="birthPlace"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

      
        <div className="flex flex-col py-5">
          <label
            htmlFor="gender"
            className=" font-medium text-black text-xl"
          >
            Jenis Kelamin
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center text-black text-xl">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="laki-laki"
              />
              <span className="ml-2">Laki-laki</span>
            </label>
            <label className="inline-flex  ml-6 items-center text-black text-xl">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="perempuan"
              />
              <span className="ml-2">Perempuan</span>
            </label>
          </div>
        </div>
        {/* Sisanya input-input lainnya dengan struktur yang sama */}
        <div className="flex flex-col py-5">
          <label
            htmlFor="email"
            className=" block font-medium text-black text-xl"
          >
            Alamat Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="number"
            className=" block font-medium text-black text-xl"
          >
            Nomor Whatsapp
          </label>
          <input
            type="number"
            id="number"
            name="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        

        <div className="flex flex-col py-5">
          <label
            htmlFor="birthPlace"
            className=" block font-medium text-black text-xl"
          >
            Tempat Lahir
          </label>
          <input
            type="text"
            id="birthPlace"
            name="birthPlace"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="birthDate"
            className=" block font-medium text-black text-xl"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="address"
            className=" block font-medium text-black text-xl"
          >
            Alamat
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="province"
            className=" block font-medium text-black text-xl"
          >
            Provinsi
          </label>
          <input
            type="text"
            id="province"
            name="province"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="city"
            className=" block font-medium text-black text-xl"
          >
            Kota/Kabupaten
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col py-5">
          <label
            htmlFor="postalCode"
            className=" block font-medium text-black text-xl"
          >
            Kode Pos
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        {/* ... */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
export default ProfileDetail;
