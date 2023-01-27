import { NextApiResponse, NextApiRequest } from "next";
import cookie from "cookie";


export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(
        "token",
        req.body.cookieToken,
        {
          httpOnly: true,
          // secure: process.env.NODE_ENV !== "development",
          secure: false,
          maxAge: 60 * 60 * 12, // 12 hours
          path: "/",
        }
      )
    );
    res.status(200).json({ success: true });
};


