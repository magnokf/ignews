import Stripe from 'stripe';


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: null,
  appInfo: {
    name: 'ignews',
    version: '0.1.0',
  },
});