interface StormModel {
	name: String;
	from_to: String;
	exposed_countries: String[];
	exposed_population: String;
	maximum_wind_speed: String;
	maximum_storm_surge: String;
<<<<<<< HEAD
	vulnerability: String;
=======
	vunerability: String;
>>>>>>> e35faef (Format code)
	gdacs_score: Number;
	ended: Boolean;
}

interface IncomingModel {
	name: String;
	from_to: String;
	exposed_countries: String;
	exposed_population: String;
	maximum_wind_speed: String;
	maximum_storm_surge: String;
<<<<<<< HEAD
	vulnerability: String;
=======
	vunerability: String;
>>>>>>> e35faef (Format code)
	gdacs_score: Number;
	ended: Boolean;
}
