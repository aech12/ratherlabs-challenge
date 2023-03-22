import React from "react";
import Image from "next/image";
import myImage from "../../public/logo.png";
import WalletBalance from "../web3/WalletBalance";

const Navbar: React.FC = () => {
	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Image src={myImage} alt="My Image" width={80} height={30} />
				<WalletBalance />
			</div>
		</nav>
	);
};

export default Navbar;
