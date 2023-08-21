import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [
    alchemyProvider({ apiKey: "3d896hhwwnUzPur_UQurCLuHyURxxVT7" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "triton",
  projectId: "a02139fa576ab9bb290d4730e70351cf",
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider
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
);
