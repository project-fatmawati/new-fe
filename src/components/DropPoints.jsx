import React from "react";

const DropPoints = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Titik Drop Pakaian</h2>
      <div className="overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127322.51275817912!2d106.61223608398546!3d-6.210205689637356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4206af10000001%3A0x500eb4d2e3e6bff8!2sTangerang%2C%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1697491598489!5m2!1sen!2sid"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </section>
  );
};

export default DropPoints;
