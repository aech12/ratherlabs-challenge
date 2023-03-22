import React from "react";
import "../styles.css";

import dynamic from 'next/dynamic'
const ConnectWallet = dynamic(() => import("../components/web3/ConnectWallet"), { ssr: false });
// import ConnectWallet from "../components/web3/ConnectWallet";
import PoolsList from "../components/home/PoolsList";

export const metadata = {
	title: "Home | RL Lending",
};

const Home = () => (
	<main className="border border-x-0 border-y-2 border-black">
		<ConnectWallet />
		<div className="p-4">
			<p className="text-2xl font-bold mb-4">Available Pools</p>
			<PoolsList />
		</div>
		<div className="p-4">
			<p className="text-2xl font-bold mb-4">Deposit History</p>
		</div>
		<div className="p-4">
			<p className="text-2xl font-bold mb-4">Withdraw</p>
		</div>
		{/* <p>Pool summarize, earnings, suggest new pools form</p> */}
		{/* <p>Add token to wallet</p> */}
	</main>
);

export default Home;
