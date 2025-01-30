import { pgTable, serial, integer, numeric } from "drizzle-orm/pg-core";
import { products } from "./products";
import { orders } from "./orders";

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id).notNull(),
  productId: integer("product_id").references(() => products.id).notNull(),
  quantity: integer("quantity").default(1).notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
});
