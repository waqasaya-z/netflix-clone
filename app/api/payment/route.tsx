import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-08-16',
    })
    let data = await request.json();
    let priceId = data.priceId    
    const session = await stripe.checkout.sessions.create({
            line_items: [{
              price: priceId,
              quantity: 1
            }],
            mode: 'subscription',
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000'
    })
    return NextResponse.json(session.url)
}
