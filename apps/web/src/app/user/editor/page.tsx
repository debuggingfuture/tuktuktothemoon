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
import { L2_REGISTRAR_ABI, L2_REGISTRY_ABI } from '@/lib/ens-abi';
import { Address } from 'cluster';
import { Account, Hex, keccak256, labelhash } from 'viem';
import { writeContract } from 'viem/actions';


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

const L2_REGISTRY_ADDRESS = '0xfc8E2d75CE1eAbC2B8ce1BC9a86a868A46B5Eec0';
const L2_REGISTRAR_ADDRESS = '0x4b6bcced803bad105504cd587d3d189c72b2a269';


export const useRegisterEns = (ownerAddress: Address, name: string, distribution: Record<string, number>) => {
    const node = `${name}.tuktuktothemoon.eth`;

    const bucketName = name;

    // const { data, isLoading, isError, error } = useSimulateContract({
    //     address: L2_REGISTRAR_ADDRESS,
    //     abi: L2_REGISTRAR_ABI,
    //     functionName: 'register',
    //     args: [node, ownerAddress, bucketName],
    // });

    // console.log('simulate contract', isError, error);

    const { writeContract, data: registerTxnHash } = useWriteContract();

    console.log('registerTxnHash', registerTxnHash)
    const register = async () => {

        if (!name) {
            return null;
        }
        // TODO bucket id

        await writeContract({
            address: L2_REGISTRAR_ADDRESS,
            abi: L2_REGISTRAR_ABI,
            functionName: 'register',
            args: [name, ownerAddress, bucketName],
        })
        console.log('register results', registerTxnHash, [name, ownerAddress, bucketName])
    }

    const updateTxtRecords = async () => {
        const labels = node.split('.');
        const label = labelhash(labels.shift()!)

        const results = await Promise.all(
            Object.entries(distribution).map(([address, percentage]) => {
                return writeContract({
                    address: L2_REGISTRY_ADDRESS,
                    abi: L2_REGISTRY_ABI,
                    functionName: 'setText',
                    args: [label, address, percentage],
                })
            }))
        console.log('results', results)
    }

    return {
        register,
        updateTxtRecords,
        registerTxnHash,
        // isLoading,
        // data
    }
}



const Page = () => {

    const [name, setName] = useState('');

    const account = useAccount();

    const [ensResults, setEnsResults] = useState({

    })

    const [akaveResults, setAkaveResults] = useState({
        success: false,
        ID: '',
        transactionHash: ''
    })

    const [isCreated, setIsCreated] = useState(false);

    const distribution = {
        ['0x962EFc5A602f655060ed83BB657Afb6cc4b5883F']: 100
    }
    // TODO distribution from retool

    const { register, updateTxtRecords, registerTxnHash } = useRegisterEns(account.address as unknown as Address, name, distribution);

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

                console.log('writeContract')
                const results = await register();
                if (results) {
                    setEnsResults({
                        registerTxnHash
                    });
                    console.log('registerResults', results);
                }

                await updateTxtRecords();
            }}>
                Register Name
            </Button>
            {
                <div className="w-1/2">
                    <ul>

                        {
                            akaveResults?.ID && (
                                <li>
                                    <div className="flex gap-2">
                                        ✅ Bucket Created.
                                        <div>
                                            {`${akaveResults?.ID}`}
                                        </div>
                                        <a href={`http://explorer.akave.ai/tx/${akaveResults?.transactionHash}`}>
                                            View on Akave
                                        </a>
                                    </div>
                                </li>

                            )
                        }
                        {
                            registerTxnHash && (
                                <li>
                                    ✅ ENS L2 <Badge>{name}.tuktuktothemoon.eth</Badge> Created

                                    <a className="underline text-sm" href={`https://base-sepolia.blockscout.com/tx/${registerTxnHash}`}>
                                        View on Blockscout
                                    </a>
                                </li>
                            )
                        }

                        {/* <ul>
                            ✅ Pool Created
                        </ul>
                        <ul>
                            ✅ Smart Wallet Created
                        </ul> */}

                    </ul>
                </div>

            }



        </div >
    )
}

export default Page;