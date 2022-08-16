import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="container-fluid border-top">
        <footer className="py-2">
          <Link href="/">
            <p className="text-center mb-0 click">&copy; {new Date().getFullYear()} Ecrypto</p>
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Footer;
