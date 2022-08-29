import { useEthereum } from "../../hooks/useEthereum";
import { Btn, Div, Input } from "../../styles/Elements";
import { RiSendPlaneLine } from "react-icons/ri";
import Swal from "sweetalert2";

import {
  AiOutlineReload,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineSend,
} from "react-icons/ai";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useLayoutEffect, useState } from "react";

function OneMail() {
  const { ethereum, account, logar, enviar } = useEthereum();

  const [destinatario, setDestinatario] = useState("");
  const [assunto, setAssunto] = useState("");
  const [corpo, setCorpo] = useState("");
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (typeof ethereum !== "undefined" && typeof account === "undefined") {
      logar();
    }
  }, [ethereum, account]);

  if (typeof ethereum === "undefined") {
    return (
      <Layout title={"Carregando..."}>
        <p style={{ textAlign: "center" }}>// TODO: Loader</p>
      </Layout>
    );
  }

  return (
    <>
      <Bar
        enviar={enviar}
        currentAccount={account}
        destinatario={destinatario}
        assunto={assunto}
        corpo={corpo}
        value={value}
      />
      <Layout title="Escrever novo e-mail">
        <Div
          className="container my-2 px-3 px-md-0"
          style={{ minHeight: "100vh", paddingTop: "50px" }}
          height="100%"
          widthmd="30rem"
        >
          <InputBar title={"Para:"} type={"text"} setValue={setDestinatario} />
          <InputBar title={"Assunto:"} type={"text"} setValue={setAssunto} />
          <InputBar title={"Valor:"} type={"number"} setValue={setValue} />
          <InputBar title={"Anexo:"} type={"file"} />

          <div className="row mb-3">
            <textarea
              className="form-control"
              style={{
                backgroundColor: "#222121",
                borderColor: "#5d5fec",
                color: "#5d5fec",
              }}
              rows="15"
              onChange={(e) => setCorpo(e.target.value)}
            ></textarea>
          </div>
        </Div>
      </Layout>
    </>
  );
}

export default OneMail;

export function Bar({ enviar, destinatario, assunto, corpo, value }) {
  const handleEnviar = () => {
    if (!destinatario) {
      return Swal.fire({
        icon: "error",
        text: "Destinatário não informado!",
        background: "#222121",
        color: "#fafafa",
      });
    }
    if (!destinatario.startsWith("0x") || destinatario.length !== 42) {
      return Swal.fire({
        icon: "error",
        text: "Destinatário inválido. Por favor verifique o endereço.",
        background: "#222121",
        color: "#fafafa",
      });
    }

    enviar(destinatario, assunto, corpo, value);
  };

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
            <h5 className="mb-0 mx-1">Write</h5>
          </Div>

          <Div className="d-flex">
            <Btn
              fs="18px"
              className="mb-0 click btn btn-outline-light py-1 px-2"
              onClick={handleEnviar}
            >
              <RiSendPlaneLine />
            </Btn>
          </Div>
        </Div>
      </nav>
    </>
  );
}

export function InputBar({ title, type, pHolder, setValue }) {
  return (
    <>
      <Div className="row mb-1">
        <div className="input-group px-0">
          <Btn className="btn btn-outline-light" type="button">
            {title}
          </Btn>
          <Input
            type={type}
            className="form-control"
            placeholder={pHolder}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </Div>
    </>
  );
}

export function Email({ title, subject, date }) {
  const press = { backgroundColor: "#131313", border: "1px solid #EC5DB5" };
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
