'use client';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { createBucket, fetchBucketFiles } from '@/app/buckets/akave';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { useAccount, useSimulateContract, useWriteContract } from 'wagmi';
import { L2_REGISTRY_ABI } from '@/lib/ens-abi';
import { Address } from 'cluster';
import { Account } from 'viem';


export const useCreateBucket = (bucketName: string) => {
    return useQuery({
        queryKey: ["akave.create", bucketName],
        queryFn: async () => {
            return createBucket(bucketName)
        },
        enabled: !!bucketName,
    });
}

export const useListBucket = (bucketName: string) => {
    return useQuery({
        queryKey: ["akave.list", bucketName],
        queryFn: async () => {
            return fetchBucketFiles(bucketName)
        },
        enabled: !!bucketName,
    });
}

const ENS_REGISTRY_ADDRESS = '0xfc8E2d75CE1eAbC2B8ce1BC9a86a868A46B5Eec0';
const ENS_REGISTRAR_ADDRESS = '0x4b6bcced803bad105504cd587d3d189c72b2a269';

export const useAddEnsTextRecords = (ownerAddress: Address, bucketName: string, distribution: Record<string, number>) => {
    const node = 'moon1.tuktuktothemoon.eth';
    const { data, isLoading, isError, error } = useSimulateContract({
        address: ENS_REGISTRAR_ADDRESS,
        abi: L2_REGISTRY_ABI,
        functionName: 'register',
        args: [node, ownerAddress, bucketName],
    });

    console.log('data', data, isLoading)
    console.log('isError', isError, error);

    // createWalletContract()
    const { writeContract } = useWriteContract()


    console.log('write contract',);


    const createWalletContract = () => ({
        address: ENS_REGISTRAR_ADDRESS,
        abi: L2_REGISTRY_ABI,
        functionName: 'register',
        args: [node, ownerAddress, bucketName],
    });

    return {
        createWalletContract,
        isLoading,
        data
    }
}



const Page = () => {

    const [name, setName] = useState('');

    const account = useAccount();

    const [akaveResults, setAkaveResults] = useState({
        success: false,
        ID: '',
        transactionHash: ''
    })

    const [isCreated, setIsCreated] = useState(false);

    const distribution = {
        ['0x9']: 100
    }
    // TODO distribution from retool

    const results = useAddEnsTextRecords(account.address as unknown as Address, name, distribution);

    // TODO useCallback
    const createPool = async () => {
        const results = await createBucket(name);
        console.log('results', results)
        setAkaveResults(results?.data as any);
        setIsCreated(true);

    }

    return (
        <div className="h-100vh container p-40">

            <Label>Pool Name</Label>
            <div className="m-4">
                <Input placeholder="name"
                    className="text-black"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>


            <h1>
                Enter Pool Details
            </h1>

            <Button onClick={async () => {
                await createPool();
            }}>
                Create
            </Button>
            <Button onClick={async () => {

                console.log('config', results)
            }}>
                Register Name
            </Button>
            {
                isCreated && (
                    <div>
                        <li>
                            <ul>
                                {
                                    akaveResults?.ID && (
                                        <div className="flex gap-2">
                                            ✅ Bucket Created.
                                            <div>
                                                {`${akaveResults?.ID}`}
                                            </div>
                                            <a href={`http://explorer.akave.ai/tx/${akaveResults?.transactionHash}`}>
                                                View on Akave
                                            </a>
                                        </div>

                                    )
                                }

                            </ul>
                            <ul>
                                ✅ ENS L2 <Badge>{name}.tuktuktothemoon.eth</Badge> Created
                            </ul>
                            <ul>
                                ✅ Pool Created
                            </ul>
                            <ul>
                                ✅ Smart Wallet Created
                            </ul>

                        </li>
                    </div>
                )
            }


        </div>
    )
}

export default Page;