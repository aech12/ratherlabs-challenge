import "../global.css";
import Navbar from "../components/ui/Navbar";
import { WalletProvider } from "lib/context/WalletContext";
import { Web3Provider } from "lib/context/Web3Context";

export const metadata = {
	title: "RL Lending",
	description: "Lending web3 website | Coding challenge",
};

const rootStyles = "text-center";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<WalletProvider>
				<Web3Provider>
					<body className={rootStyles}>
						<Navbar />
						{children}
					</body>
				</Web3Provider>
			</WalletProvider>
		</html>
	);
}
