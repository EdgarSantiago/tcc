import Link from "next/link";
import { Btn, Div } from "../styles/Elements";
import {GiFox} from 'react-icons/gi'

function Navbar() {
  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
            className="container" widthmd="40rem" height="40px">
          <Link href="/">
            <h2 className="mb-0 click text-pink">

            Ecrypto
            </h2>
          </Link>


          <Link href="/mail">
            <Btn bg="#EC5DB5" className="btn btn-light py-1">Entrar<GiFox/></Btn>
            </Link>

        </Div>
      </nav>
    </>
  );
}

export default Navbar;
