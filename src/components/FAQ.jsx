import React from 'react';
import './FAQ.css'; // Mengimpor file CSS yang telah Anda buat

function FAQ() {
  return (
    <section className="faq pb-5 py-5">
      <div className="container">
        <div className="row text-center">
          <h2 className="text-black fw-bold"> FAQ </h2>
          <p className="h4">"Cari tahu BarterStyle Disini!"</p>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="accordion" id="accordionExample" data-aos="fade-up" data-aos-duration="2000">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Bagaimana cara mendaftar?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Untuk mendaftar, Anda dapat mengunjungi halaman registrasi kami dan mengisi formulir pendaftaran.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Apakah ada biaya untuk menggunakan layanan ini?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Tidak ada biaya untuk menggunakan layanan tukar pakaian ini. Kami ingin memberikan kesempatan bagi setiap orang untuk berkontribusi pada sustainability fashion.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Bagaimana jika saya tidak menemukan pakaian yang saya inginkan?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Jika Anda tidak menemukan pakaian yang Anda inginkan, Anda bisa mencoba menukarkan pakaian lain yang Anda miliki. Kami terus memperbarui katalog kami, jadi pastikan untuk cek secara berkala.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
