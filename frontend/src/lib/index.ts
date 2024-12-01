// place files you want to import through the `$lib` alias in this folder.

import { PUBLIC_SERVER_URL } from "$env/static/public";

export interface StormInformation {
	_id: string;
	name: string;
	from_to: string;
	exposed_countries: string[];
	exposed_population: string;
	maximum_wind_speed: string;
	maximum_storm_surge: string;
	vulnerability: string;
	gdacs_score: number;
}
<<<<<<< HEAD

export const searchStorms = async (value: string) => {
	const response = await fetch(`${PUBLIC_SERVER_URL}/search?value=${value}`)

	const data = await response.json();

	return data.stormsInformation as StormInformation[];
}
=======
>>>>>>> e35faef (Format code)
