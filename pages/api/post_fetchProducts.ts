import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const authCookie = req.cookies.token;
        const body = req.body;
        const url = req.body.url;
        delete body.url;
        const response = await fetch(url, {
            method: `${req.method}`,
            credentials: "include",
            headers: {
                'Cookie': 'token=' + authCookie,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        if (!response.ok) {
            throw new Error('Response not ok');
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        res.status(500).json({ error });
    }

}