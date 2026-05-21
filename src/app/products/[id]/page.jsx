"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import products from "@/data/products.json";
import { isLoggedIn } from "@/lib/auth";

const ProductDetailsPage = ({ params }) => {

  const router = useRouter();

  useEffect(() => {

    if (!isLoggedIn()) {
      router.push("/login");
    }

  }, []);

 const id = params.id;

const product = products.find(
  (item) => item.id == id
);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">

      <div className="card lg:card-side bg-base-100 shadow-xl">

        <figure className="p-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-xl"
          />
        </figure>

        <div className="card-body">

          <h2 className="text-3xl font-bold">
            {product.name}
          </h2>

          <p className="text-gray-500">
            {product.description}
          </p>

          <p className="text-lg font-semibold">
            Brand: {product.brand}
          </p>

          <p>
            Rating: ⭐ {product.rating}
          </p>

          <p>
            Stock: {product.stock}
          </p>

          <p className="text-2xl font-bold text-orange-500">
            ${product.price}
          </p>

          <button className="btn btn-warning text-white mt-4">
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetailsPage;