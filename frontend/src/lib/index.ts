// place files you want to import through the `$lib` alias in this folder.

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
