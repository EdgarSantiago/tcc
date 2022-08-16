import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="container-fluid border-top">
        <footer className="py-2">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Ecrypto</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
