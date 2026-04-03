import type { NextApiRequest, NextApiResponse } from "next";
import { getUserInfoByIp, UserInfoResponse } from "../../../lib/userInfo";

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserInfoResponse | { error: string }>) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const ipAddress = req.query.userInfo;

  if (!ipAddress || Array.isArray(ipAddress)) {
    return res.status(400).json({ error: "Invalid IP address parameter" });
  }

  const result = await getUserInfoByIp(ipAddress);

  if (!result) {
    return res.status(502).json({ error: "Unable to resolve user info" });
  }

  return res.status(200).json(result);
}
