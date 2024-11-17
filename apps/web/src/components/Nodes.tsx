import { NodeTypes } from "@xyflow/react";
import { RecipientNode } from "./RecipientNode";
import { AccountNode } from "./AccountNode";

export enum NodeType {
    Account = 'account',
    Recipient = 'recipient',

}
export const nodeTypes: NodeTypes = {

    // 'meta': MetaNode,
    [NodeType.Account]: AccountNode,
    [NodeType.Recipient]: RecipientNode,
};

