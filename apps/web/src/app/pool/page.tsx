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
        </div>
    )
}

export default Page;