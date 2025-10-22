// import clientPromise from "@/services/server/mongo";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);
//     const products = await db.collection("products").find({}).toArray();
//     return NextResponse.json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }


import clientPromise from "@/services/server/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // הדפסת ENV בפועל שנטענו
    console.log("ENV MONGODB_DB =", process.env.MONGODB_DB);
    console.log("ENV MONGODB_URI host =", (process.env.MONGODB_URI || "").split("@").at(1)?.split("/")[0]);

    const client = await clientPromise;
    const dbName = process.env.MONGODB_DB as string;
    const db = client.db(dbName);

    // מה יש ב-DB הזה?
    const collections = await db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));

    // כמה מסמכים יש ב-'products'?
    const count = await db.collection("products").countDocuments({});
    console.log("products count =", count);

    const docs = await db.collection("products").find({}).toArray();
    return NextResponse.json(docs);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
