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

const Page = () => {

    const [name, setName] = useState('');


    const useAccount = useState('');

    const [akaveResults, setAkaveResults] = useState({
        success: false,
        ID: '',
        transactionHash: ''
    })

    const [isCreated, setIsCreated] = useState(false);

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
            {
                isCreated && (
                    <div>
                        <li>
                            <ul>
                                {
                                    akaveResults.ID && (
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