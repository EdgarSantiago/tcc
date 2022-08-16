import Link from "next/link";
import { Btn, Div } from "../styles/Elements";
import {GiFox} from 'react-icons/gi'

function Navbar() {
  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div  className="container" widthmd="45rem" height="40px">
          <Link href="/">
            <h5 className="mb-0 click text-pink">

            Ecrypto
            </h5>
          </Link>


          <Link href="/mail">
            <Btn bg="#EC5DB5" color="#222121" className="btn btn-light py-1">Entrar com MetaMask<GiFox/></Btn>
            </Link>

        </Div>
      </nav>
    </>
  );
}

export default Navbar;
