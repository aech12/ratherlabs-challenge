"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { ethers } from "ethers";
import { Pool } from "@aave/contract-helpers";

// create context
const Web3Context = createContext<any>(null);

// export context
export function useWeb3() {
	return useContext<any>(Web3Context);
}

// export context provider
export function Web3Provider({ children }) {
	const [provider, setProvider] = useState<any>(null);
	const [pool, setPool] = useState<any>(null);

	useEffect(() => {
		const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_URL);
		setProvider(provider);
	}, []);

	useEffect(() => {
		if (provider) {
			const poolAddress = process.env.NEXT_PUBLIC_AAVE_LENDING_POOL_ADDRESS;
			const wethGatewayAddress = process.env.NEXT_PUBLIC_WETH_GATEWAY_CONTRACT_ADDRESS;

			const pool = new Pool(provider, {
				POOL: poolAddress ?? "",
				WETH_GATEWAY: wethGatewayAddress,
			});

			setPool(pool);
		}
	}, [provider]);

	return <Web3Context.Provider value={{ provider, pool }}>{children}</Web3Context.Provider>;
}
