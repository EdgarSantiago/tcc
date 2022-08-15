import Link from "next/link";
import { Btn, Div } from "../styles/Elements";
import {GiFox} from 'react-icons/gi'

function Navbar() {
  return (
    <>
      <nav className="navbar blur-navbar border-bottom fixed-top">
        <Div className="container" widthmd="45rem" height="40px">
          <Link href="/">
            <h5 className="mb-0 click">

            Ecrypto
            </h5>
          </Link>


            <Btn className="btn btn-outline-dark py-1" br="50px">Entrar <GiFox/></Btn>

        </Div>
      </nav>
    </>
  );
}

export default Navbar;
