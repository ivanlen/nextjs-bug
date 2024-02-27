// pages/api/addToken.js
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { tokenId, tokenName } = req.body;
    try {
      const newToken = await prisma.token.create({
        data: {
          tokenId,
          tokenName,
        },
      });
      res.status(201).json(newToken);
    } catch (error) {
      console.error("Error adding token:", error);
      res.status(500).json({ error: "Unable to add token" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
