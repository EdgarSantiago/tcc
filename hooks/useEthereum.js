import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

export function useEthereum() {
  const router = useRouter();

  const [ethereum, setEthereum] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  const logar = () => {
    if (typeof ethereum === "undefined") {
      // TODO: fazer um alerta mais bonito. modal, swal fire (?)
      return alert("Você precisa instalar a MetaMask para poder fazer login.");
    }

    if (typeof account !== "undefined") {
      return router.push("/mail");
    }

    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      setAccount(accounts[0]);
      router.push("/mail");
    });
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setEthereum(window.ethereum);
    }
  }, []);

  return { ethereum, account, logar };
}
