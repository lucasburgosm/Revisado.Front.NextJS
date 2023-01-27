import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');


export default ( req : NextApiRequest, res : NextApiResponse) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize(
            "token", req.body.cookieToken,
            {
                httpOnly : true,
                sameSite: 'none', 
                secure : process.env.NODE_ENV !== "development",
                maxAge: 60 * 60 * 12, // 12 hora
                path: "/"
            }) 
    )
    res.status(200).json({success : true})
}