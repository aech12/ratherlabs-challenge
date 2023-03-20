import '../global.css';
import Navbar from "../components/ui/Navbar";

export const metadata = {
	title: "RL Lending",
	description: "Lending web3 website | Coding challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
