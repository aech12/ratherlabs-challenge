"use client";

import { useWallet } from "lib/context/WalletContext";

const Balance = () => {
	const { wallet } = useWallet();

	return <div>{wallet?.balance ? <p className="p-2 bg-red-400 text-lg font-bold text-zing-800 shadow-md rounded-lg">{`${wallet.balance} ETH`}</p> : null}</div>;
};

export default Balance;
