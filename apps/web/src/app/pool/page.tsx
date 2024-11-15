'use client';

import React, { useCallback } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar } from '@coinbase/onchainkit/identity';


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

const nodeTypes: NodeTypes = {

    'meta': MetaNode,
    'identity': IdentityNode,

};


const Page = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);


    // const onConnect = useCallback(
    //     (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    //     [setEdges]
    // );


    return (
        <div className="h-100vh">
            Pool

            Created By
            <Avatar address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9" />

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
                Display files
            </div>
            <div>
                Upload File here
            </div>
        </div>
    )
}

export default Page;