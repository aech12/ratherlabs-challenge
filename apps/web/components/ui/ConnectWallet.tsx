"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "lib/context/AccountContext";

export default function ConnectButton() {
	const { accountAddress, setAccountAddress } = useAccount();

	useEffect(() => {
    connectWallet();
  }, []);

	const connectWallet = async () => {
		// return if address is already connected
		if (accountAddress) return
		
		if (!window || !(window as WindowEthereum)?.ethereum) {
			console.log("ethers did not load");
		} else {
			// ts-ignore
			const provider = new ethers.providers.Web3Provider((window as WindowEthereum).ethereum as any);
			console.log("provider", provider);
			await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			const accountAddress = await signer.getAddress();
			setAccountAddress(accountAddress);
		}
	};

	return (
		<div className="border p-4 rounded-md">
			<p>{accountAddress ? `Connected: ${accountAddress}` : "Not connected"}</p>
			<button type="button" onClick={connectWallet} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded">
				Connect Wallet
			</button>
		</div>
	);
}
