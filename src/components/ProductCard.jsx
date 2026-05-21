import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {

  const {
    id,
    name,
    image,
    price,
    rating,
  } = product;

  return (
    <div className="card bg-base-100 shadow-xl animate__animated animate__zoomIn">

      <figure className="p-5">

        <img
          src={image}
          alt={name}
          className="h-60 w-full object-cover rounded-xl"
        />

      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {name}
        </h2>

        <p className="flex items-center gap-2">

          <FaStar className="text-yellow-500" />

          {rating}

        </p>

        <p className="font-semibold text-lg text-orange-500">
          ${price}
        </p>

        <div className="card-actions justify-end">

          <Link
            href={`/products/${id}`}
            className="btn btn-warning text-white"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;