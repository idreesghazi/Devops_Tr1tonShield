import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  sepolia,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, sepolia, goerli],
  [
    alchemyProvider({ apiKey: "xWVuWbGYdyX7vdXGL5_HWOBw28EhRdBz" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "alapin-project",
  projectId: "59504b48694598288c9469a5a2a6f0be",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

console.log(chains, publicClient);
console.log(connectors);
console.log("wagmiConfig", wagmiConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider
      coolMode
      chains={chains}
      theme={darkTheme({
        accentColor: "#ea9d294d",
        accentColorForeground: "#ea9d29",
        borderRadius: "large",
        fontStack: "rounded",
        overlayBlur: "small",
      })}
    >

      <App />

    </RainbowKitProvider>
  </WagmiConfig>
)
