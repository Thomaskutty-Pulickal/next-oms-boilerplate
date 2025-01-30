import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((res) => res[0]);

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.insert(users).values({
    name,
    email,
    passwordHash: hashedPassword,
  });

  return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}
