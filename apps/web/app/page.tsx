import React from "react";
import "../styles.css";

import WalletBalance from "../components/common/WalletBalance";
import ConnectWallet from "../components/ui/ConnectWallet";
import PoolsList from "../components/home/PoolsList";

export const metadata = {
	title: "Home | RL Lending",
};

const Home = () => (
	<main className="">
		<ConnectWallet />
		<div className="p-4 bg-violet-100">
			<p className="text-2xl font-bold mb-4">Available Pools</p>
			<WalletBalance />
			<PoolsList />
		</div>
		<div className="p-4 bg-violet-100">
			<p className="text-2xl font-bold mb-4">Deposit History</p>
		</div>
		<div className="p-4 bg-violet-100">
			<p className="text-2xl font-bold mb-4">Withdraw</p>
		</div>
		<p>Pool summarize, earnings, suggest new pools form</p>
		<p>Add token to wallet</p>
	</main>
);

export default Home;
