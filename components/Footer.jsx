import Link from "next/link";

function Footer() {
  return (
    <>
    <hr/>
      <div className="container-fluid">
        <footer className="py-1">
          <ul className="nav justify-content-center border-bottom mb-2 pb-1">
            <li className="nav-item">
              <Link href="/">
              <a className="nav-link text-dark px-2">
                Home
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark px-2">
                Pricing
              </a>
            </li>
          </ul>
          <p className="text-center">&copy; {new Date().getFullYear()} Ecrypto, Inc</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
