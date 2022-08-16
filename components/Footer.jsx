import Link from "next/link";

function Footer() {
  return (
    <>
    <hr/>
      <div className="container-fluid">
        <footer className="py-2">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Ecrypto</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
