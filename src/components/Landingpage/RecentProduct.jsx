import { Link } from "react-router-dom";
import { useProduct } from '../../context/ProductContext'
import ProductCard from "../Katalog/ProductCard";

const RecentProduct = () => {

  const { products } = useProduct();
    const featuredProducts = products.slice(0, 5);

  return (
    <div>
      <div className="container mx-auto pb-[50px]">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 pb-5">
            {/* card section */}
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center  text-xl mt-10 cursor-pointer bg-black hover:bg-teal-600 text-white py-1 px-5 rounded-full">
              <Link to="/Katalog">View All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProduct;
