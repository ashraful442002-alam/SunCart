import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white p-10">

      <aside>

        <h2 className="text-3xl font-bold text-orange-400">
          SunCart
        </h2>

        <p>
          Your Summer Essentials Partner
        </p>

        <p>
          Contact: support@suncart.com
        </p>

      </aside>

      <nav>

        <div className="grid grid-flow-col gap-4 text-2xl">

          <Link href="/">
            <FaFacebook />
          </Link>

          <Link href="/">
            <FaInstagram />
          </Link>

          <Link href="/">
            <FaYoutube />
          </Link>

        </div>

      </nav>

      <p className="text-sm">
        © 2026 SunCart | All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;