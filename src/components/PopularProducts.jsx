import products from "@/data/products.json";

import ProductCard from "./ProductCard";

const PopularProducts = () => {

  const popularProducts = products.slice(0, 3);

  return (
    <div className="py-16 px-5 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          popularProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }

      </div>

    </div>
  );
};

export default PopularProducts;