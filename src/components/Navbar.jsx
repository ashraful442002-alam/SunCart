import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">

      {/* left */}
      <div className="navbar-start">

        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-2 text-orange-500"
        >
          <FaShoppingBag />
          SunCart
        </Link>

      </div>

      {/* center */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/myprofile">My Profile</Link>
          </li>

        </ul>

      </div>

      {/* right */}
      <div className="navbar-end gap-2">

        <button className="btn btn-outline btn-warning">
          Login
        </button>

        <button className="btn btn-warning text-white">
          Register
        </button>

      </div>

    </div>
  );
};

export default Navbar;