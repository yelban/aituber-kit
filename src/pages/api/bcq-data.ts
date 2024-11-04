import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

type Data = {
  bcq?: any;
  error?: string;
};

export default async function handler(
    req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // 讀取 JSON 檔案
    const jsonPath = path.join(process.cwd(), "public/js/data.json");
    const jsonData = await fs.readFile(jsonPath, "utf8");
    const data = JSON.parse(jsonData);

    res.status(200).json({ bcq: data });
  } catch (error) {
    console.error("Error reading bcq data:", error);
    res.status(500).json({ error: "Failed to load bcq data" });
  }
}
