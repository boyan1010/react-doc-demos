import { useState } from "react";
import { CHAINS } from "../../connector/chain";
import ChainSelect from "./ChainSelect";
export default function ConnectWithSelect() {
  const chainIds = Object.keys(CHAINS).map((chainId) => Number(chainId));
  const [chainId, setChainId] = useState(1);
  function switchChain(id) {
    setChainId(id);
  }
  return (
    <ChainSelect
      chainId={chainId}
      chainIds={chainIds}
      switchChain={switchChain}
    ></ChainSelect>
  );
}
