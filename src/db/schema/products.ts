import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  numeric,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  isAvailable: boolean("is_available").default(true),
  createdAt: text("created_at").default("now()").notNull(),
});
