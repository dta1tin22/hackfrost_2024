import { PUBLIC_SERVER_URL } from '$env/static/public';
import type { StormInformation } from '$lib';
import type { PageServerLoad } from '../$types';
import type { RouteParams } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await fetch(`${PUBLIC_SERVER_URL}/${(params as RouteParams).id}`);

	const data = await response.json();

	// console.log(data);

	return data as StormInformation;
};
