'use client';

import {
    ReactFlow,
    Node,
    Handle,
    Position,
} from '@xyflow/react';
import type { NodeProps } from "@xyflow/react";

type IdentityNodeProps = Node<{
    onNameChange: (id: string, name: string) => void;
    onModelChange: (id: string, model: string) => void;
}>
export const IdentityNode: React.FC<NodeProps<IdentityNodeProps>> = (props: NodeProps<IdentityNodeProps>) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable
            />

        </>
    )
}