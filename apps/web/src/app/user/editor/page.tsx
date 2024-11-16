'use client';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { createBucket, fetchBucketFiles } from '@/app/buckets/akave';
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


    const key = 'campaign-2';
    // TODO useCallback
    const createCampaign = async () => {
        const bucketName = key;
        const results = await createBucket(key);
        console.log('results', results)
    }

    return (
        <div className="h-100vh">

            <Button onClick={async () => {
                await createCampaign();
            }}>
                Submit
            </Button>


            <h1>
                Enter Pool Details
            </h1>


        </div>
    )
}

export default Page;