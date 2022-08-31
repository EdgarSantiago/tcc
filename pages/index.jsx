import { useEthereum } from "../hooks/useEthereum";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GiFox } from "react-icons/gi";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Btn, Color, Div, Section } from "../styles/Elements";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const width = "52rem";
  const blue = "#5d5fec";
  const purple = "#9567d1";

  const { logar } = useEthereum();

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Para usar nosso email em mobile utilize Brave Browser",
        background: "#222121",
        color: "#fafafa",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#d33",
        confirmButtonText: `<a class="text-decoration-none text-white" href="https://brave.com/">Instalar Brave Browser</a>`,
      });
    } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Para usar nosso email em mobile utilize Brave Browser",
        background: "#222121",
        color: "#fafafa",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#d33",
        confirmButtonText: `<a class="text-decoration-none text-white" href="https://brave.com/">Instalar Brave Browser</a>`,
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Layout title="Boas Vindas">
        <Section>
          <Div
            mt="55px"
            className="container py-5"
            height="100vh"
            widthmd={width}
          >
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100%"
            >
              <Div className="col-12 mb-0 mb-md-5">
                <p className="mb-0">
                  <Color value={blue}>Ecrypto</Color> é foco em privacidade
                </p>
                <h1 className="display-4">
                  Bem-vindo à uma melhor internet onde{" "}
                  <Color value={blue}>
                    privacidade e liberdade vem primeiro
                  </Color>
                </h1>
              </Div>
              <Div className="col-2 d-none d-md-block">
                <p>E-mail</p>
              </Div>
              <Div className="col-2 d-none d-md-block">
                <p>Blockchain</p>
              </Div>
              <Div className="col-2 d-none d-md-block">
                <p>Criptomoeda</p>
              </Div>
            </Div>
          </Div>
        </Section>
        <hr className="hr" />
        <hr className="hr" />

        <Section>
          <Div className="container" widthmd={width}>
            <Div className="row align-items-center" height="50vh">
              <Div className="col-12 col-md-10">
                <h2 className="text-blue">
                  Com ECrypto, seus dados percentecem a você, não à empresas de
                  tecnologia, governos ou hackers
                </h2>
                <p className="mb-0 text-white2">
                  Nosso serviço criptografado ajuda você a lutar por uma
                  internet melhor que é segura e privada por padrão.
                </p>
              </Div>
              <Div className="col-2"></Div>
            </Div>
          </Div>
        </Section>
        <hr className="hr" />
        <hr className="hr" />

        <Section>
          <Div className="container" widthmd={width}>
            <Div className="row align-items-center text-end" height="50vh">
              <Div className="col-2"></Div>
              <Div className="col-12 col-md-10">
                <h2 className="text-blue">
                  Com ECrypto, seus dados percentecem a você, não à empresas de
                  tecnologia, governos ou hackers
                </h2>
                <p className="mb-0 text-white2">
                  Nosso serviço criptografado ajuda você a lutar por uma
                  internet melhor que é segura e privada por padrão.
                </p>
              </Div>
            </Div>
          </Div>
        </Section>

        <hr className="hr" />
        <hr className="hr" />

        <Section>
          <Div className="container py-5" height="100%" widthmd={width}>
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100%"
            >
              <Div className="col-10 mb-0">
                <h2 className="mb-3">
                  <Color value={blue}>Seus dados,</Color>{" "}
                  <Color value={purple}>suas regras</Color>
                </h2>
                <h5 className="mb-0 text-white2">
                  ECrypto oferece serviço de troca de e-mails criptografado e
                  fácil de usar, calendário, armazenamento de arquivos, envio de
                  valores em criptomoedas, construido no princípio de seus
                  dados, suas regras.
                </h5>
              </Div>
            </Div>
          </Div>
        </Section>

        <hr className="hr" />
        <hr className="hr" />

        <Section>
          <Div className="container py-3" widthmd={width}>
            <Div className="row mb-4 text-center">
              <h3 className="text-blue">
                Motivos de <Color value={purple}>por que</Color> usar ECrypto
              </h3>
            </Div>
            <Div className="row g-2 justify-content-center">
              <Div className="col-3 mx-2 text-center">
                <p>Segurança</p>
              </Div>

              <Div className="col-3 mx-2 text-center">
                <p>Descentralizado</p>
              </Div>

              <Div className="col-3 mx-2 text-center">
                <p>Prevenção</p>
              </Div>
            </Div>
          </Div>
        </Section>

        <hr className="hr" />
        <hr className="hr" />

        <Section>
          <Div className="container py-5" height="100%" widthmd={width}>
            <Div
              className="row align-items-center justify-content-center text-center"
              height="100%"
            >
              <Div className="col-12">
                <h2 className="mb-0 text-blue">
                  <Color value={purple}>ECrypto</Color> é foco em privacidade
                </h2>
                <h2 className="mb-3 text-blue">Escolha uma internet melhor</h2>
                <h4 className="mb-3 text-white2">
                  Logue-se agora com sua carteira
                </h4>

                <Btn
                  bg="#EC5DB5"
                  color="#222121"
                  className="btn btn-light px-4 py-2"
                  fs="20px"
                  onClick={() => logar("/mail")}
                >
                  Logar com MetaMask
                  <GiFox />
                </Btn>
              </Div>
            </Div>
          </Div>
        </Section>
      </Layout>
    </>
  );
}
