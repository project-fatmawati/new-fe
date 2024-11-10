import iconsuccess from "../../assets/icons-success.gif";

function PopupPayment({ showModal, handleCloseModal }) {
  return (
    <div className="container mx-auto px-4">
      {showModal && (
        <div className="fixed inset-0 overlow-y-auto flex items-center justify-center z-10 bg-opacity-50 bg-gray-900 text-center blur-backdrop">
          <div className="bg-white p-6 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center mb-4">
              <img className="w-[80px]" src={iconsuccess} />
              <h3 className="text8xl font-bold text-2xl pt-5">
                Pembayaran Berhasil!
              </h3>
            </div>
            <h1 className="text-xl pb-[50px]">
              Terima kasih telah melakukan Barter Pakaian di BarterStyle
            </h1>
            <button
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupPayment;
