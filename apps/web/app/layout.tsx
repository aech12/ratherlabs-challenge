import "../global.css";
import Navbar from "../components/ui/Navbar";
import { AccountProvider } from "lib/context/AccountContext";

export const metadata = {
	title: "RL Lending",
	description: "Lending web3 website | Coding challenge",
};

const rootStyles = "text-center"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<AccountProvider>
				<body className={rootStyles}>
					<Navbar />
					{children}
				</body>
			</AccountProvider>
		</html>
	);
}
