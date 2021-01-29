import { NowRequest, NowResponse } from '@vercel/node';
import fetch from 'node-fetch';

const RELEASES_BASE_URL: string = 'https://api.github.com/repos/tdemapp/manager/releases';

export default async function (_req: NowRequest, res: NowResponse) {
	try {
		const response: Response = await fetch(RELEASES_BASE_URL);
		const json = await response.json();
		res.send(json);
	} catch (error) {
		res.send(error);
	}
}
