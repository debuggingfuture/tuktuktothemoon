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


const useCreateBucket = (bucketName: string) => {
    return useQuery({
        queryKey: ["akave.create", bucketName],
        queryFn: async () => {
            return createBucket(bucketName)
        },
        enabled: !!bucketName,
    });
}

const useListBucket = (bucketName: string) => {
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
        <div className="h-100vh">

            <Input placeholder="name"
                className="text-black"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

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
                                ✅ Bucket Created.
                                <div className="flex gap-2">
                                    <div>

                                        {`${akaveResults?.ID}`}
                                    </div>
                                    <a href={`http://explorer.akave.ai/tx/${akaveResults?.transactionHash}`}>
                                        View on Akave
                                    </a>
                                </div>



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