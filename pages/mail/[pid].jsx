import { Btn, Div, Input } from "../../styles/Elements";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineReload, AiOutlineSearch, AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import Layout from "../../components/Layout";

function OneMail() {

  return (
    <>
      <Bar />
      <Layout title="Mails">
        <Div
          className="container my-2 px-3 px-md-0"
          style={{ minHeight: "100vh", paddingTop: "50px" }}
          height="100%"
          widthmd="30rem"
        >
              <InputBar title={"For:"} type={"text"} pHolder="e@ecrypto.com"/>
              <InputBar title={"Cc/CCo:"} type={"text"}/>
              <InputBar title={"Subject:"} type={"text"}/>
              <InputBar title={"Files:"} type={"file"}/>

              <div className="row mb-3">
                <textarea className="form-control" style={{backgroundColor: "#222121", borderColor: "#ec5db5", color: "#ec5db5"}} rows="3"></textarea>
                </div>

        </Div>
      </Layout>
    </>
  );
}

export default OneMail;

export function Bar() {
  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container"
          widthmd="32rem"
          height="40px"
        >
          <Div className="d-flex">
            <Link href="/mail">
            <Btn className="btn btn-outline-light mb-0 click py-1 px-2">
              <AiOutlineClose />
            </Btn>
            </Link>
          </Div>

          <Div className="d-flex">
            <h5 className="mb-0 mx-1">Emails</h5>
            <h7 className="mb-0 text-pink">3365</h7>
          </Div>

          <Div className="d-flex">
            <Link href="/mail/123">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <RiSendPlaneLine />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}

export function InputBar({title, type, pHolder}) {
  return (
    <>
      <Div className="row mb-1">
        <div className="input-group px-0">
          <Btn className="btn btn-outline-light" type="button">
            {title}
          </Btn>
          <Input type={type} className="form-control" placeholder={pHolder} />
        </div>
      </Div>
    </>
  );
}

export function Email({ title, subject, date }) {
  const press = { backgroundColor: "#131313", border: "1px solid #EC5DB5"}
  return (
    <>
      <Div
        onContextMenu={(e) => e.preventDefault()}
        whileHover={press}
        whileTap={press}
        className="row align-items-center rounded click mb-1 cancel-menu"
        height="70px"
        border="1px solid #fafafa30"
      >
        <Div className="col-1 text-center">
          <Div className="input-group">
            <Div
              border="0px"
              bg="transparent"
              className="input-group-text px-0"
            >
              <Input className="form-check-input mt-0" type="checkbox" />
            </Div>
          </Div>
        </Div>

        <Div className="col-9 px-2 px-md-0">
          <h5 className="mb-0 text-pink">{title}</h5>
          <h6 className="mb-0 text-white2">{subject}</h6>
        </Div>

        <Div className="col-2 px-1 mb-3 text-end">
          <p>{date}</p>
        </Div>
      </Div>
    </>
  );
}
