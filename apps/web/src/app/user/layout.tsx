'use client';
import { UserProvider } from "@/components/UserProvider";


const environmentId = process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '8b12ff85-504e-4972-b287-ba35eb43afef';


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div>
            <UserProvider environmentId={environmentId}>
                {children}
            </UserProvider>

        </div>
    );
}
