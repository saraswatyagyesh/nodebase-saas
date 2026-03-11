import { checkout, polar, portal } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma  from "@/lib/db";
import { polarClient } from "./poalar";

export const auth = betterAuth({
    database: prismaAdapter(prisma, 
        {provider: "postgresql",}
    ),
    emailAndPassword: {enabled: true, autoSignIn: true,},
    plugins: [
        polar({
            client: polarClient, 
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "774103c0-756d-4e2d-86b5-9e573ec4b308",
                            slug: "pro"
                        }
                    ],
                    successUrl: process.env.POLAR_SUCCESS_URL!,
                    authenticatedUsersOnly: true,
                }),
                portal(),
            ],
        })
    ]
});

