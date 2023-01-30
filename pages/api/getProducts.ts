import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const authCookie = req.cookies.token;
        const response = await fetch('https://revisado-back.onrender.com/api/products', {
            method: "get",
            credentials: "same-origin",
            headers: {
                'Cookie': 'token=' + authCookie
            }
        })
        if (!response.ok) {
            throw new Error('Response not ok');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

}




