import React from "react";
import Header from "./Header";

function Faq() {
  const faqs = [
    {
      question: "Bagaimana cara saya bergabung di BarterStyle?",
      answer:
        "Cara bergabung di BarterStyle Anda cukup melakukan registrasi dan login di website resmi kami.",
    },
    {
      question: "Apa saja jenis pakaian yang bisa ditukarkan di BarterStyle?",
      answer: "Semua jenis pakaian yang masih layak pakai.",
    },
    {
      question: "Apa keuntungan menjadi Member Pro BarterStyle?",
      answer: "Anda akan mendapatkan berbagai manfaat eksklusif.",
    },
    {
      question:
        "Apakah saya bisa mengantar langsung Pakaian saya ke BarterStyle?",
      answer: "Ya, Anda dapat mengantar langsung pakaian Anda.",
    },
    {
      question: "Berapa biaya ongkir yang harus saya bayar untuk barter?",
      answer: "Biaya ongkir sesuai dengan tarif yang berlaku.",
    },
  ];

  return (
    <section className=" bg-white">
      <Header title="FAQ" description="Cari Tahu BarterStyle Disini !" />
      <div className=" flex justify-center">
        <div className="w-full max-w-[1000px]">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="mb-4 bg-white p-4 border rounded-lg shadow-md"
            >
              <summary className="font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
