import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');


export default ( req : NextApiRequest, res : NextApiResponse) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize(
            "token", req.body.cookieToken,
            {
                httpOnly : true,
                secure : process.env.NODE_ENV !== "development",
                maxAge: 60 * 60 * 12, // 1 hora,
                path: "/",
                samesite:"lax",
            }) 
    )
    res.status(200).json({success : true})
}