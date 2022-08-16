import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyles = createGlobalStyle`

    html, body {
      padding: 0;
      margin: 0;
      overflow-x: hidden !important;
      background-color: #222121;
      color: #eee6e6
    }

    * {
      box-sizing: border-box;
      /*font-family: 'win99';*/
    }

    .blur-navbar{
      backdrop-filter: blur(4px) !important;
    }
    .click{
    cursor: pointer;
    }

    h1{
      line-height: 1.1 !important;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #222121;
    }

    ::-webkit-scrollbar-thumb {
      background: #eee6e6;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #a39e9e;
    }

  `;

export const Div = styled(motion.div)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`;

export const Section = styled(motion.section)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`;

export const Span = styled(motion.span)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
`;

export const Btn = styled(motion.button)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  border-radius: ${(props) => props.br || ""};
  font-size: ${(props) => props.fs || ""};
  border: ${(props) => props.border || ""};
  border-bottom: ${(props) => props.bb || ""};


`;


export const Input = styled(motion.input)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  border-radius: ${(props) => props.br || ""};
`;
