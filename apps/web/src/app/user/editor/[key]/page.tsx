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

    const [name, setName] = useState('')

    const key = 'campaign-2';
    // TODO useCallback
    const createPool = async () => {
        const bucketName = key;
        const results = await createBucket(key);
        console.log('results', results)
    }

    return (
        <div className="h-100vh">

            <Input placeholder="message"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

            <Button onClick={async () => {
                await createPool();
            }}>
                Create
            </Button>


            <h1>
                Enter Pool Details
            </h1>


        </div>
    )
}

export default Page;