import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
};

export default ProductsPage;