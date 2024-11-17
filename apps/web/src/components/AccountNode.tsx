'use client';

import {
    ReactFlow,
    Node,
    Handle,
    Position,
} from '@xyflow/react';
import type { NodeProps } from "@xyflow/react";
import { Input } from './ui/input';
import { useState } from 'react';
import { Address } from 'viem';

type AccountNodeProps = Node<{
    accountName: string,
    onNameChange: (id: string, name: string) => void;
    onModelChange: (id: string, model: string) => void;
}>
export const AccountNode: React.FC<NodeProps<AccountNodeProps>> = (props: NodeProps<AccountNodeProps>) => {
    const { data: { accountName } } = props;
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable
            />

            <div>
                {accountName}.tuktuktothemoon.eth
            </div>


        </>
    )
}