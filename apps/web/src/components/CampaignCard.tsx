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


export const CampaignCard = (
    {
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
                <Button>Support</Button>
            </CardFooter>
        </Card>
    )

}