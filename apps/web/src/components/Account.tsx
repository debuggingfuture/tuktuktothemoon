import { Address as AddressBadge, Avatar } from '@coinbase/onchainkit/identity'
import { Address } from 'viem'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    return (
        <div>
            {/* {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />} */}
            {address && (
                <div>
                    {/* <Avatar address={address as Address} /> */}
                    <AddressBadge address={address} />
                </div>
            )}
            {/* <button onClick={() => disconnect()}>Disconnect</button> */}
        </div>
    )
}