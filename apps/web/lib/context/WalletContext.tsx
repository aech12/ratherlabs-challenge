"use client";

import { useState, createContext, useContext } from "react";
// types
type Wallet = null | {
	address: string | null;
	balance?: string | null;
};

interface WalletContext {
	wallet: Wallet;
	setWallet: (wallet: Wallet) => void;
}

// create context
const WalletContextInitialState = {
	wallet: null,
	setWallet: () => {},
};
const WalletContext = createContext<WalletContext>(WalletContextInitialState);

// export context
export function useWallet() {
	return useContext<WalletContext>(WalletContext);
}

// export context provider
export function WalletProvider({ children }) {
	const [wallet, setWallet] = useState<Wallet>(null);

	return <WalletContext.Provider value={{ wallet, setWallet }}>{children}</WalletContext.Provider>;
}
