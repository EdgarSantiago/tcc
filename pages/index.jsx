import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {GiFox} from 'react-icons/gi'
import Navbar from "../components/Navbar";
import { Btn, Color, Div, Section } from "../styles/Elements";
export default function Home() {
  const width = "42rem"
  const pink = "#EC5DB5"
  const purple = "#9567d1"

  return (
    <>
    <Navbar/>
      <Section>
        <Div mt="55px" className="container py-5" height="100%" widthmd={width}>
          <Div
            className="row align-items-center justify-content-center text-center"
            height="100%"
          >
            <Div className="col-12 mb-0 mb-md-5">
              <p className="mb-0"><Color value={pink}>Ecrypto</Color> is privacy by default</p>
              <h1 className="display-4">
                Welcome to a better internet where <Color value={pink}>privacy and freedom come
                first</Color>
              </h1>
            </Div>
            <Div className="col-2 d-none d-md-block">
              <p>Mail</p>
            </Div>
            <Div className="col-2 d-none d-md-block">
              <p>Blockchain</p>
            </Div>
            <Div className="col-2 d-none d-md-block">
              <p>Cryptocurrency</p>
            </Div>
            <Div className="col-2 d-none d-md-block">
              <p>Vpn</p>
            </Div>
          </Div>
        </Div>
      </Section>
      <hr />

      <Section>
        <Div className="container" widthmd={width}>
          <Div className="row align-items-center" height="50vh">
            <Div className="col-12 col-md-10">
              <h2 className="text-pink">
                With Ecrypto, your data belongs to you, not tech companies,
                governments, or hackers
              </h2>
              <p className="mb-0 text-white2">
                Our encrypted services help you fight for a better internet that
                is secure and private by default.
              </p>
            </Div>
            <Div className="col-2"></Div>
          </Div>
        </Div>
      </Section>
      <hr />

      <Section>
        <Div className="container" widthmd={width}>
          <Div className="row align-items-center text-end" height="50vh">
            <Div className="col-2"></Div>
            <Div className="col-12 col-md-10">
              <h2 className="text-pink">
                With Ecrypto, your data belongs to you, not tech companies,
                governments, or hackers
              </h2>
              <p className="mb-0 text-white2">
                Our encrypted services help you fight for a better internet that
                is secure and private by default.
              </p>
            </Div>
          </Div>
        </Div>
      </Section>
      <hr />

      <Section>
        <Div className="container py-5" height="100%" widthmd={width}>
          <Div
            className="row align-items-center justify-content-center text-center"
            height="100%"
          >
            <Div className="col-10 mb-0">
              <h2 className="mb-3"><Color value={pink}>Your data,</Color> <Color value={purple}>your rules</Color></h2>
              <h5 className="mb-0 text-white2">
                Ecrypto provides easy-to-use encrypted email, calendar, file
                storage, VPN, and much more, built on the principle of your
                data, your rules.
              </h5>
            </Div>
          </Div>
        </Div>
      </Section>
      <hr />

      <Section>
        <Div className="container py-3" widthmd={width}>
          <Div className="row mb-4 text-center">
            <h3 className="text-pink">Reasons why you <Color value={purple}>should</Color> use Ecrypto</h3>
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

      <hr />

      <Section>
        <Div className="container py-5" height="100%" widthmd={width}>
          <Div
            className="row align-items-center justify-content-center text-center"
            height="100%"
          >
            <Div className="col-12">
              <h2 className="mb-0">Ecrypto is privacy</h2>
              <h2 className="mb-3">Choose a better internet</h2>
              <h4 className="mb-3">Login now with your metamask account</h4>
              <Link href="/mail">
                <Btn className="btn btn-outline-light px-4 py-2" fs="20px" br="20px">Entrar com MetaMask<GiFox/></Btn>
              </Link>
            </Div>
          </Div>
        </Div>
      </Section>
    </>
  );
}
