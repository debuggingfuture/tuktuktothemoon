import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Address } from 'viem';
import { Address as AddressDisplayed, Name, Avatar } from "@coinbase/onchainkit/identity";

export interface Media {
    heroImageSrc: string,
    createdBy: Address
}

export const MediaCard = (
    {
        media,
        className
    }: {
        media: Media,
        className?: string
    }
) => {

    if (!media) return ((
        <div></div>
    ))
    const { heroImageSrc, createdBy } = media

    return (
        <a href={heroImageSrc} target="_blank">
            <Card className="h-full">
                <CardHeader className="p-0">
                    <img src={heroImageSrc} className="w-full max-h-48 object-cover" />
                </CardHeader>
                <CardContent>
                    {/* <CardTitle>{title}</CardTitle> */}
                    <CardDescription>
                        Created by
                        <div className="flex flex-row items-middle align-middle gap-2 p-2">
                            <Avatar address={createdBy} />
                            <Name address={createdBy} />
                        </div>
                        {/* <p className="text-sm text-gray-600 mb-4">by {createdBy}</p> */}

                    </CardDescription>
                </CardContent>
                {/* 
                <CardFooter className="gap-2">

                </CardFooter> */}
            </Card>
        </a >
    )

}