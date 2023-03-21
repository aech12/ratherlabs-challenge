import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface WindowEthereum extends Window{
    ethereum?:MetaMaskInpageProvider
  }
}
