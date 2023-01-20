import type { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie');


export default ( req : NextApiRequest, res : NextApiResponse) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize(
            "token", "",
            {
                httpOnly : true,
                secure : process.env.NODE_ENV !== "development",
                expires : new Date(0),
                path: "/"
            }) 
    )
    res.status(200).json({success : true})
}