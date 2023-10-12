import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function GET() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-08-16',
    })
    const prices = await stripe.prices.list({
        limit: 3
    })

    return NextResponse.json(prices.data.reverse())
}