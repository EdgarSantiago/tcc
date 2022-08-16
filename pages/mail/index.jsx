import { Btn, Div, Input } from "../../styles/Elements";
import {HiMenuAlt1, HiPencil} from 'react-icons/hi'
import {AiOutlineReload, AiOutlineSearch} from 'react-icons/ai'
import Link from "next/link";

function Mail() {
    return ( 
        <>
        <BarMail/>
        <Div className="container border-end border-start" height="100vh" widthmd="30rem">
            <Div className="row">
             <div class="input-group px-0">
                <Btn border="0px" bb="1px solid #fafafa" br="0px" className="btn btn-outline-light" type="button"><AiOutlineSearch/></Btn>
                <Input br="0px" type="text" className="form-control" placeholder="Search"/>
             </div>
            </Div>
        </Div>
        </>
     );
}

export default Mail;


export function BarMail() {
    return (
      <>
        <nav className="navbar blur-navbar border-bottom">
          <Div className="container" widthmd="30rem" height="40px">
  
            <Div className="d-flex">
              <Btn className="btn btn-outline-light mb-0 click py-1 px-2"><HiMenuAlt1/></Btn>
              <h5 className="mb-0 mt-1 mx-2 click"><AiOutlineReload/></h5>
            </Div>
  
  
            <Div className="d-flex">
              <h5 className="mb-0 mx-1">Emails</h5>
              <h7 className="mb-0">3365</h7>
            </Div>
  
  
            <Div className="d-flex">
            <Link href="/">
              <Btn fs="18px" className="mb-0 click btn btn-outline-light py-1 px-2"><HiPencil/></Btn>
              
            </Link>
            </Div>
          </Div>
        </nav>
      </>
    );
  }
  
  