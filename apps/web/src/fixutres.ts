// TODO ipfs
export const POOLS = [
    {
        key: 'moon1',
        createdBy: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
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
        createdBy: '0x962efc5a602f655060ed83bb657afb6cc4b5883f',
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
