'use client';

import {
    ReactFlow,
    Node,
    Handle,
    Position,
} from '@xyflow/react';
import type { NodeProps } from "@xyflow/react";

type MetaNodeProps = Node<{
    onNameChange: (id: string, name: string) => void;
    onModelChange: (id: string, model: string) => void;
}>

export const MetaNode: React.FC<NodeProps<MetaNodeProps>> = (props: NodeProps<MetaNodeProps>) => {

    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable
            />
            <div className="gradient wrapper">
                <div className="inner">
                    <h3 className="text-lg">Pool</h3>
                    Dropdown
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                isConnectable
            />
        </>

    );
};

export default MetaNode;