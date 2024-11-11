
import { useOrder } from '../../context/OrderContext'

const LikedProducts = () => {
    const { order } = useOrder();
  
    return (
      <div>
        <h2>Produk yang Disukai</h2>
        <ul>
          {order.likedProducts.map((productId) => (
            <li key={productId}>{/* Tampilkan detail produk berdasarkan productId */}</li>
          ))}
        </ul>
      </div>
    );
  };