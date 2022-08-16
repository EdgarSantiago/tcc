import Link from "next/link";
import { Color } from "../styles/Elements";

function Footer() {
  return (
    <>
      <div className="container-fluid border-top">
        <footer className="py-2">
          <Link href="/">
            <p className="text-center mb-0 click">&copy; {new Date().getFullYear()} <Color value="#EC5DB5">Ecrypto</Color></p>
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Footer;
