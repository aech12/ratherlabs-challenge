import React from "react";
import "../styles.css";

import ConnectWallet from "../components/ui/ConnectWallet";
// import Tags from "../components/home/Tags";

export const metadata = {
	title: "Home | RL Lending",
};

const Home = () => (
	<>
		<main className="">
			<div>
				<h1>Hello World!</h1>
				<ConnectWallet />
				<p>Deposits</p>
				<p>Deposit History</p>
				<p>Available Pools</p>
				<p>Withdraw</p>
				<p>Pool summarize, earnings, suggest new pools form</p>
				<p>Add token to wallet</p>
			</div>
		</main>
	</>
);

export default Home;
