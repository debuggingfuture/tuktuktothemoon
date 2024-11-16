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
import { CAMPAIGNS } from '@/fixutres';

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
    const campaign = useMemo(() => {

        return CAMPAIGNS.find(({ key }) => {
            return key === params.key;
        })
    }, []);

    // const onConnect = useCallback(
    //     (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges]
    // );


    return (
        <div className="h-100vh container">
            <h2 className="text-2xl">Pool</h2>

            <div className="flex flex-row p-2">
                <div className="pr-2">
                    Created By
                </div>
                <div className="flex flex-row align-middle text-center items-center">
                    <Avatar address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" />
                    <Address address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" />

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
                <h2 className="text-2xl">
                    Upload File here
                </h2>
                <UploadDropzone bucketName={bucketName} />

            </div>


        </div>
    )
}

export default Page;