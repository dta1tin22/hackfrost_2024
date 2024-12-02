import { Request, Response } from 'express';
import { storm } from './models/Storm.model';
import { Transform } from '../utils/TransfromJSON';
import { isNativeError } from 'util/types';

export const SendData = async (req: Request, res: Response) => {
	try {
		const New = req.body.stormsInformation as Array<IncomingModel>;
		const newStorms = await Transform(New);

		// Delete all old data
		await storm.deleteMany({});

		// Update new data
		const bulk = newStorms.map((OneStorm: StormModel) => {
			// console.log(OneStorm)
			return {
				insertOne: {
					document: OneStorm
				}
			};
		});

		await storm.bulkWrite(bulk);

		// console.log(bulk[0].insertOne.document)
		// console.log('SUCCESS', bulk[0].insertOne.document);
		res.status(200).send({
			message: 'success'
		});
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};
