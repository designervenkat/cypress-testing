import { NextApiRequest, NextApiResponse, } from "next";



export async function POST(req: NextApiRequest, res: NextApiResponse) {


  const {username, password} = req.body;

  if (username === 'test' && password === "password") {
    res.status(200).json({username: 'test', token: "124"})
  } else {
    res.status(401).json({error: 'Invalid Credentails'})
  }


  
}

// export async function GET(request: Request) {}