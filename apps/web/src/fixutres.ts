// TODO ipfs
export const POOLS = [
    {
        key: 'moon1',
        title: 'Remix the Unofficial Etheruem Theme Song',
        description: 'Remix and create your verison of the "Castle in the Sky"',
        category: 'Music',
        distributions: [
            {
                type: 'ens',
                ens: 'abc.eth',
                share: 20
            },
            {
                type: 'pool',
                criteria: [
                    'efp'
                ],
                share: 30
            }
    
        ]
    },
    {
        key: 'moon2',
        title: 'Running Air Quality Monitors in Bangkok',
        description: 'Carrying a sensor during the Bangkok Marathon 2024',        
        category: 'DeSci',
        distributions: [
            {
                type: 'ens',
                ens: 'fundingthecommons.eth',
                share: 100
            }
    
        ]
    },
    {
        key: 'moon4',
        title: 'Vitalik, please stop singing in Devcon',
        description: 'petition to stop vitalik',
        category: 'd/acc',
        distributions: [
            {
                type: 'ens',
                ens: 'vitalik.eth',
                share: 20
            },
            {
                type: 'pool',
                criteria: [
                    'efp'
                ],
                share: 30
            }
    
        ]
    }
]
