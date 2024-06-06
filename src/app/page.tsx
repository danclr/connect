import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { defineChain, getContract, toEther } from "thirdweb";

export default function Home() {

  const chain = defineChain(2340);
  
  const contract = getContract({
    client: client,
    chain: chain,
    address: "0xE45757fc796E4F8BAcea3F3440F1056A31610770"
  });






  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center   max-w-screen-lg ">
      <div className="py-20">
        

        <div className="flex ">
          <ConnectButton
            client={client}
            chain={chain}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>

        
      </div>
    </main>
  );
}



