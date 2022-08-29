import { useEthereum } from "../../hooks/useEthereum";
import { Btn, Div, Input } from "../../styles/Elements";
import { HiMenuAlt1, HiPencil } from "react-icons/hi";
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useEffect, useLayoutEffect, useState } from "react";
import { strSmartTrim } from "../../utils/string";

function Mail() {
  const { ethereum, account, logar } = useEthereum();
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    if (typeof account !== "undefined") {
      const provider = new ethers.providers.EtherscanProvider(
        "ropsten",
        "X56U4HDNT7SI7GS39BI2Q8RXDM6BR3JG2C"
      );
      provider
        .getHistory("0x96D7604248825Fb8dc7BdE1f994DAd75D8405349")
        .then((txs) => {
          const parsedEmails = [];

          for (const tx of txs) {
            try {
              const dataObj = JSON.parse(Web3.utils.toUtf8(tx.data));

              if (
                dataObj.t == "mail" &&
                tx.to.toLowerCase() ==
                  "0x96D7604248825Fb8dc7BdE1f994DAd75D8405349".toLowerCase() //account.toLowerCase()
              ) {
                parsedEmails.push(dataObj);
              }
            } catch {}
          }

          console.log(parsedEmails);
          setEmails(parsedEmails);
        })
        .catch(console.error);
    }
  }, [account]);

  useLayoutEffect(() => {
    if (typeof ethereum !== "undefined" && typeof account === "undefined") {
      logar("/mail");
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
      <Bar endereco={strSmartTrim(account)} />
      <Layout title="Caixa de Entrada">
        <Div
          className="container my-2 px-3 px-md-0"
          style={{ minHeight: "100vh", paddingTop: "50px" }}
          height="100%"
          widthmd="30rem"
        >
          {emails && <SearchBar />}

          {emails ? (
            <>
              {emails.map((email, index) => (
                <Email
                  key={index}
                  title={email.title}
                  subject={email.subject}
                  date={email.date}
                />
              ))}
            </>
          ) : (
            <>
              <Div className="row align-items-center text-center" height="80vh">
                <Div className="col-12">
                  <h1>Empty</h1>
                </Div>
              </Div>
            </>
          )}
        </Div>
      </Layout>
    </>
  );
}

export default Mail;

export function Bar({ endereco, naoLidasCount }) {
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
            <Btn className="btn btn-outline-light mb-0 click py-1 px-2">
              <HiMenuAlt1 />
            </Btn>
          </Div>

          <Div className="d-flex">
            <h5 className="mb-0 mx-1">Emails ({endereco})</h5>
            {naoLidasCount && (
              <h7 className="mb-0 text-pink">{naoLidasCount}</h7>
            )}
          </Div>

          <Div className="d-flex">
            <Link href="/mail/new">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <HiPencil />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <Div className="row mb-1">
        <div className="input-group px-0">
          <Btn className="btn btn-outline-light" type="button">
            <AiOutlineSearch />
          </Btn>
          <Input type="text" className="form-control" placeholder="Search" />
        </div>
      </Div>
    </>
  );
}

export function Email({ title, subject, date }) {
  const press = { backgroundColor: "#131313", border: "1px solid #5d5fec" };
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
