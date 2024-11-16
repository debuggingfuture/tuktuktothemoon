// import {
//     DynamicContextProvider,
//     DynamicWidget,
// } from "@dynamic-labs/sdk-react-core";
// import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';
import {
    createConfig,
    useAccount,
    WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { sepolia, baseSepolia } from 'viem/chains';
import { WalletOptions } from './WalletOptions.tsx'

import { coinbaseWallet } from 'wagmi/connectors';
import { Account } from "./Account.tsx";

const config = createConfig({
    chains: [sepolia, baseSepolia],
    ssr: true,
    connectors: [
        coinbaseWallet({
            appName: "TTTTM",
            preference: 'smartWalletOnly',
            version: '4',
        }),
    ],
    multiInjectedProviderDiscovery: false,
    transports: {
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
    },
});

const queryClient = new QueryClient();

function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
}


export const UserProvider = ({ children, environmentId }: { children: any, environmentId: string }) => {

    return <div>

        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <OnchainKitProvider
                    config={{
                        appearance: {
                            name: 'OnchainKit Playground',
                            logo: 'https://onchainkit.xyz/favicon/48x48.png?v4-19-24',
                            mode: 'auto',
                            theme: 'default',
                        },
                    }}
                    apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
                    chain={baseSepolia} // add baseSepolia for testing
                >
                    <nav className="flex flex-row items-center justify-between pb-15 pull-right">
                        <ConnectWallet />
                    </nav>
                    <div className="pt-5">
                        {children}
                    </div>
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </div >
}