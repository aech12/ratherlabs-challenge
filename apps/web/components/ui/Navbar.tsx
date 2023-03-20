import React from "react";
import Image from "next/image";
import myImage from "../../public/logo.png";

const Navbar: React.FC = () => {
	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Image src={myImage} alt="My Image" width={80} height={30} />
				<div className="mx-10 text-xl "></div>
			</div>
		</nav>
	);
};

export default Navbar;
