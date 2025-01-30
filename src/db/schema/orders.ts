import { pgTable, serial, integer, text } from "drizzle-orm/pg-core";
import { users } from "./users";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  status: text("status").default("pending").notNull(), // e.g., pending, completed, cancelled
  totalAmount: text("total_amount").notNull(),
  createdAt: text("created_at").default("now()").notNull(),
});
