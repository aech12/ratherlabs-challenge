"use client";

import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

// types
type AccountAddress = string | null;
interface AccountContextValue {
	accountAddress: AccountAddress;
	setAccountAddress: (address: AccountAddress) => void;
}
type AccountContext = AccountContextValue;

// create context
const AccountContextInitialState = {
	accountAddress: null,
	setAccountAddress: () => {},
};
const AccountContext = createContext<AccountContext>(AccountContextInitialState);

// export context
export function useAccount() {
	return useContext<AccountContext>(AccountContext);
}

// export context provider
export function AccountProvider({ children }) {
	const [accountAddress, setAccountAddress] = useState<AccountAddress>(null);

	return <AccountContext.Provider value={{ accountAddress, setAccountAddress }}>{children}</AccountContext.Provider>;
}
