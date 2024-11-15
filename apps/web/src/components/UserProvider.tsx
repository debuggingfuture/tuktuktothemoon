import {
    DynamicContextProvider,
    DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
    createConfig,
    WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { sepolia, baseSepolia } from 'viem/chains';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const config = createConfig({
    chains: [sepolia, baseSepolia],
    multiInjectedProviderDiscovery: false,
    transports: {
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
    },
});

const queryClient = new QueryClient();


export const UserProvider = ({ children, environmentId }: { children: any, environmentId: string }) => {

    return <div>
        <DynamicContextProvider
            settings={{
                environmentId,
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <nav className="flex flex-row items-center justify-between pb-15">
                        Menu
                    </nav>
                    <div className="pt-5">
                        {children}
                    </div>
                </QueryClientProvider>
            </WagmiProvider>
        </DynamicContextProvider>
    </div>
}