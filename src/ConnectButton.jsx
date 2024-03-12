import { useContext } from "react";
import { SecretjsContext } from "./secretJs/SecretjsContext";
 
export default function ConnectButton () {
    const { secretAddress, connectWallet } = useContext(SecretjsContext);
 
    return (
        <div>
        <div>
          <button className="button" onClick={connectWallet}>
            Connect Keplr
          </button>
        </div>
        <h2>
          {secretAddress
            ? secretAddress.slice(0, 10) + "...." + secretAddress.slice(41, 45)
            : "Please connect wallet"}
        </h2>
      </div>
    )
}