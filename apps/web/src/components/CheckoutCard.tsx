import { Checkout, CheckoutButton, CheckoutStatus } from '@coinbase/onchainkit/checkout';


export const CheckoutCard = ({ product }: { product: any }) => {

    return (
        <Checkout productId='my-product-id' >
            <CheckoutButton coinbaseBranded /> // set coinbaseBranded for branding
            <CheckoutStatus />
        </Checkout>

    )
}