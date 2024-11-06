
import ShopFiltering from "./ShopFiltering";
// import ListKatalog from "./ListKatalog";

function LeftSide() {
  const filters = {
    categories: [
      "All Producs",
      "Kemeja",
      "Kaos",
      "Rompi",
      "Celana",
      "Jas",
      "Outer",
      "Dress",
    ],
    colors: ["all", "black", "white", "red", "blue", "silver", "green"],
    size: ["s", "m", "l", "xl", "big size"],
  };

//   const shopPage =()=> {
//     const [products,setproducts] = useState(productsData);
//     const [filterState, setFiltersState] = useState({
//         category: 'all',
//         color:'all',
//         size : 'all'
//     })
//   }


  //filtering function
  const applyFilters = () => {
    let filteredProducts = productsData;

    // filter by category
    if(setFiltersState.category && filterState.category !== 'all') {
        filteredProducts = filteredProducts.filter(product=> product.category ===
            filterState.category
        )
    }

        // filter by color
        if(setFiltersState.color && filterState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product=> product.color ===
                filterState.color
            )
        }
                // filter by size
                if(setFiltersState.size && filterState.size !== 'all') {
                    filteredProducts = filteredProducts.filter(product=> product.size ===
                        filterState.size
                    )
                }
  }

  return (
    <div classname="flex flex-col md:flex-row md:gap-12 gap-8">
      <ShopFiltering />

      <div>
        <h3 className="text-xl font-medium mb-4">Product Available</h3>
        {/* <ListKatalog /> */}
      </div>
    </div>
  );
}

export default LeftSide;
