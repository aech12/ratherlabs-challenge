"use client";

import { useWallet } from "lib/context/AccountContext";

const Balance = () => {
	const { wallet } = useWallet();

	return  <p className="mb-4 bg-red-400 text-lg font-bold text-zing-800 shadow-md rounded-lg">Your balance: {wallet?.balance} ETH</p>
};

export default Balance;
