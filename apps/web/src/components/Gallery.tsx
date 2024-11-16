import { MediaCard } from "./MediaCard"
import * as _ from 'lodash';

// const media = [
//     {
//         heroImageSrc: "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2022%2F11%2F1126024.jpg?w=960&cbr=1&q=90&fit=max",
//         cid: '',
//         createdBy: "0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
//     },
//     {
//         heroImageSrc: "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2022%2F11%2F1126024.jpg?w=960&cbr=1&q=90&fit=max",
//         createdBy: "0x962efc5a602f655060ed83bb657afb6cc4b5883f"
//     },
//     {
//         heroImageSrc: "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2022%2F11%2F1126024.jpg?w=960&cbr=1&q=90&fit=max",
//         createdBy: "0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
//     },
//     {
//         heroImageSrc: "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2022%2F11%2F1126024.jpg?w=960&cbr=1&q=90&fit=max",
//         createdBy: "0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
//     },
//     {
//         heroImageSrc: "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2022%2F11%2F1126024.jpg?w=960&cbr=1&q=90&fit=max",
//         createdBy: "0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
//     }
// ]

export const Gallery = ({
    media
}: {
    media: any[]
}) => {
    return (
        <div className="grid grid-cols-3 items-start gap-4">
            {
                _.chunk(media, 2).map(
                    (chunk: any, index: any) => {
                        return (
                            <div className="col-span-1 grid items-start gap-2">
                                {
                                    chunk.map(
                                        (media: any) => (
                                            <MediaCard media={media} className="p-1" />
                                        )
                                    )
                                }
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}