import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

// import { Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
export type AddressOrEns = Address | string;

const EFP_ENDPOINT = "https://api.ethfollow.xyz/api/v1/";


export type EfpUserStats = {
    followers_count: string;
    following_count: string;
};

export const getEndpointUserStats = (addressOrEns: AddressOrEns) => {
    return `${EFP_ENDPOINT}users/${addressOrEns}/stats`;
};

export const useUserStats = (addressOrEns: AddressOrEns) => {
    return useQuery<EfpUserStats>({
        queryKey: ["ethfollow.user-stats", addressOrEns],
        queryFn: async () => {
            const endpoint = getEndpointUserStats(addressOrEns);

            return fetch(endpoint).then((res) => res.json());
        },
    });
};


export const FollowerBadge = (
    {
        address
    }: {
        address: string
    }
) => {
    const [followerCount, setFollowerCount] = useState(0)
    const userStatsQuery = useUserStats(address);

    useEffect(() => {
        if (!userStatsQuery.isSuccess) return;
        ; (async () => {
            const followerCount = parseInt(userStatsQuery.data.followers_count);
            setFollowerCount(followerCount)
        })();
    }, [userStatsQuery.isSuccess]);


    return (
        <Badge>
            {`${followerCount} followers`}
        </Badge>
    )
}