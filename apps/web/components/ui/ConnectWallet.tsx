"use client";

import { useEffect } from "react";
import { ethers } from "ethers";
import { useWallet } from "lib/context/AccountContext";

export default function ConnectButton() {
	const { wallet, setWallet } = useWallet();

	const connectWallet = async () => {
		// return if wallet is already connected
		if (wallet?.address) return;

		if (!window || !(window as WindowEthereum)?.ethereum) {
			console.log("ethers did not load");
		} else {
			// get user's wallet info
			const provider = new ethers.providers.Web3Provider((window as WindowEthereum).ethereum as any);
			await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			// asign wallet data to state
			const address = await signer.getAddress();
			const balanceInWei = await provider.getBalance(address);
			setWallet({ address, balance: ethers.utils.formatEther(balanceInWei)});
		}
	};

	return (
		<div className="border p-4 rounded-md">
			<p>{wallet?.address ? `${wallet.address}` : "Not connected"}</p>
			<button type="button" onClick={connectWallet} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded">
				Connect Wallet
			</button>
		</div>
	);
}
