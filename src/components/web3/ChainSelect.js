import { CHAINS } from "../../connector/chain";
export default function ChainSelect({ chainIds, chainId, switchChain }) {
  return (
    <>
      <select
        name="choice"
        value={chainId}
        onChange={(e) => {
          switchChain(e.target.value);
        }}
      >
        {chainIds.map((chainId) => {
          return (
            <option key={chainId} value={chainId}>
              {CHAINS[chainId].name}
            </option>
          );
        })}
      </select>
    </>
  );
}
