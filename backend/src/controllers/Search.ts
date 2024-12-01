import { Request, Response } from 'express';
import { storm } from './models/Storm.model';

export const SearchSimilar = async (req: Request, res: Response) => {
	try {
		const result = await storm.find({ name: { $regex: req.query.value, $options: 'i' } });
		console.log(result);
		res.send({
			stormsInformation: result
		});
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};
