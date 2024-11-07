import React from 'react';

function Header({ title, description }) {
  return (
    <div className="text-center max-w-[600px] mx-auto py-[80px]">
      <h1 data-aos="fade-up" className="text-4xl font-bold pb-2">
        {title}
      </h1>
      <p data-aos="fade-up" className="text-xl text-black pt-5">
        {description}
      </p>
    </div>
  );
}

export default Header;