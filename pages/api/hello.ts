// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date:Date
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const date = new Date
  res.status(200).json({date})
}
