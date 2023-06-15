import { NextApiRequest, NextApiResponse } from "next";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;

  res.status(200).json({ message: "Dados recebidos com sucesso!" });
}
