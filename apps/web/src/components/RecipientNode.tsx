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

type RecipientNodeProps = Node<{
    // receipientAddress: string,
    onNameChange: (id: string, name: string) => void;
    onModelChange: (id: string, model: string) => void;
}>
export const RecipientNode: React.FC<NodeProps<RecipientNodeProps>> = (props: NodeProps<RecipientNodeProps>) => {


    const [address, setAddress] = useState<Address>('0x962efc5a602f655060ed83bb657afb6cc4b5883f');
    const [share, setShare] = useState(50);

    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable
            />
            <div className="wrapper z-99">
                <Input
                    placeholder="address"
                    className="text-black"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value as Address);
                    }}
                />

                <Input
                    type="number"
                    placeholder="share"
                    className="text-black"
                    value={share}
                    onChange={(e) => {
                        setShare(Number(e.target.value));
                    }}
                />
            </div>




        </>
    )
}