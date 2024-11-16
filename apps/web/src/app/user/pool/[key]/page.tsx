'use client';

import React, { useCallback, useMemo } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Address, Avatar } from '@coinbase/onchainkit/identity';


import {
    ReactFlow,
    Node,
    Edge,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    NodeTypes,
    MarkerType,
    NodeProps
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import MetaNode from '@/components/MetaNode';
import { IdentityNode } from '@/components/IdentityNode';
import UploadDropzone from '@/components/UploadDropzone';
import { Gallery } from '@/components/Gallery';
import { useParams } from 'next/navigation';
import { POOLS } from '@/fixutres';
import { FollowerBadge } from '@/components/EfpFollowers';
import { Badge } from '@/components/ui/badge';

const nodeTypes: NodeTypes = {

    'meta': MetaNode,
    'identity': IdentityNode,
};


const Page = () => {


    const params = useParams<{ key: string }>()

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const bucketName = 'bucket'

    // TODO endpoint / ifps
    const pool = useMemo(() => {

        return POOLS.find(({ key }) => {
            return key === params.key;
        })
    }, []);

    // const onConnect = useCallback(
    //     (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges]
    // );

    const address = '0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9';

    if (!pool) {
        return <div>404</div>
    }
    const { key, title = '' } = pool;

    return (
        <div className="h-100vh container p-16">
            <h2 className="text-2xl">Pool: {title}</h2>

            <div className="pr-2">

                <div className="flex flex-row">
                    ENS
                    <Badge>
                        {key}.tuktuktothemoon.eth
                    </Badge>
                </div>
            </div>
            <div className="flex flex-row p-2">
                <div className="pr-2">
                    Created By
                </div>
                <div className="flex flex-row align-middle text-center items-center gap-3 ">
                    <Avatar address={address} />
                    <Address className="bg-blue-400 text-white rounded-lg" address={address} />
                    <FollowerBadge address={address} />

                    <a className="underline text-sm" href={`https://base-sepolia.blockscout.com/address/${address}`}>
                        View on Blockscout
                    </a>
                </div>
            </div>

            <div>
                <Gallery />
            </div>
            <h2 className="text-2xl">Distributions</h2>

            <div style={{ height: '70vh', width: '100%' }}>
                <ReactFlow
                    fitView
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    // onConnect={onConnect}
                    nodeTypes={nodeTypes}
                // edgeTypes={edgeTypes}
                >
                    <Background />
                </ReactFlow>

            </div >

            <div>
                <h2 className="text-2xl m-2 p-2">
                    Upload
                </h2>
                <UploadDropzone bucketName={bucketName} />

            </div>


        </div >
    )
}

export default Page;