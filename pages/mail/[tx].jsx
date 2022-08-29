import { Div, Btn, Color } from "../../styles/Elements";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import { strSmartTrim } from "../../utils/string";

import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineRollback } from "react-icons/ai";
import { HiMenuAlt1, HiPencil } from "react-icons/hi";

const Email = () => {
  const router = useRouter();
  const { tx } = router.query;

  return (
    <>
      <Bar id={tx} />
      <Layout title="email">
        <Div
          height="100%"
          widthmd="30rem"
          className="container px-3 px-md-0"
          style={{ marginTop: "60px" }}
        >
          <Div
            className="row rounded py-2"
            border="1px solid #fafafa30"
            whileHover={{
              backgroundColor: "#131313",
              border: "1px solid #5d5fec",
            }}
            whileTap={{
              backgroundColor: "#131313",
              border: "1px solid #5d5fec",
            }}
          >
            <p className="mb-0">
              <Color>Assunto:</Color> Algum assunto
            </p>
            <p className="mb-0">
              <Color>De:</Color> {strSmartTrim(tx, 15)}
            </p>
            <p className="mb-0">
              <Color>Corpo:</Color> Sint occaecat commodo ullamco fugiat. Veniam
              incididunt ullamco et ex aliquip sunt esse commodo veniam.
              Occaecat ipsum eu commodo dolor deserunt aute commodo aute
              officia. Ipsum occaecat tempor sint tempor qui nostrud ut fugiat
              cupidatat enim. Elit in ullamco enim eiusmod. Reprehenderit tempor
              aliqua laboris culpa consequat.
            </p>
            <p className="mb-0">
              <Color>Anexos:</Color> files
            </p>
          </Div>
          <Div className="row justify-content-start align-items-center">
              <Btn className="btn mt-1">Responder</Btn>
              <Link href={`https://goerli.etherscan.io/tx/${tx}`}>
              <Btn className="btn mt-1">Abrir na EtherScan</Btn>
              </Link>
              <Link href={`/mail`}>
              <Btn className="btn mt-1">Voltar</Btn>
              </Link>

          </Div>
        </Div>
      </Layout>
    </>
  );
};

export default Email;

export function Bar({ id }) {
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
            <h5 className="mb-0 mx-1">Email {strSmartTrim(id, 10)} </h5>
          </Div>

          <Div className="d-flex">
            <Link href="/mail">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <AiOutlineRollback />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}
