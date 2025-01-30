import { users } from "./schema/users";
import { products } from "./schema/products";
import { orders } from "./schema/orders";
import { orderItems } from "./schema/orderItems";

import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(
  process.env.DATABASE_URL ||
    "postgres://postgres:postgres@localhost:5432/nextcommerce"
);

export { db, users, products, orders, orderItems };
