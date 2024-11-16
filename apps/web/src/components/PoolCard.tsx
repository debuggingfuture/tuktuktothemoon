import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"


export const PoolCard = (
    {
        key,
        title,
        description,
        category,
        className
    }: any
) => {

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>🛺{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Badge className="bg-blue-400">{category}</Badge>
            </CardContent>
            <CardFooter>
                <a href={`/user/pool/${key}`}>
                    <Button>Support</Button>
                </a>

            </CardFooter>
        </Card>
    )

}