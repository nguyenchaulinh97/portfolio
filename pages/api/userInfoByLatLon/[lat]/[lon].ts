import type { NextApiRequest, NextApiResponse } from "next";
import { getZipCodeFromLatLon } from "../../../../lib/userInfo";

type ZipCodeResponse = {
  zipcode: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ZipCodeResponse | { error: string }>) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { lat, lon } = req.query;

  if (!lat || !lon || Array.isArray(lat) || Array.isArray(lon)) {
    return res.status(400).json({ error: "Invalid coordinates" });
  }

  const zipcode = await getZipCodeFromLatLon(lat, lon);

  return res.status(200).json({ zipcode });
}
