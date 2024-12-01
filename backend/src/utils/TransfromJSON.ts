import express from 'express';

<<<<<<< HEAD
const parseMonth = (monthString: string) => {
	switch(monthString){
		case 'Jan':
			return 1;
    case 'Feb':
			return 2;
		case 'Mar':
			return 3;
    case 'Apr':
			return 4;
		case 'May':
			return 5;
    case 'Jun':
			return 6;
		case 'Jul':
			return 7;
    case 'Aug':
      return 8;
    case 'Sep':
			return 9;
		case 'Oct':
			return 10;
    case 'Nov':
			return 11;
		case 'Dec':
			return 12;
    default:
			return 0;
	}
=======
export const Transform = async(Storms: Array<IncomingModel>) => {
    let Result = await Storms.map((OneStorm : IncomingModel) => ({
        ...OneStorm, exposed_countries : OneStorm.exposed_countries.split(", ")
    }))
    return Result as Array<StormModel>
>>>>>>> d7fdfde (Finish Backend)
}

const isEnded = (date: string) => {
	const formatDate = date.split(' ');
	const dayEnd = parseInt(formatDate[0]);
	const monthEnd = parseMonth(formatDate[1]);

	const currentDate = new Date()

	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;

	if(monthEnd === currentMonth){
		if(dayEnd < currentDay) return true;
		return false;
	}

	return true;
}

export const Transform = async (Storms: Array<IncomingModel>) => {
	let Result = await Storms.map((OneStorm: IncomingModel) => ({
		...OneStorm,
		exposed_countries: OneStorm.exposed_countries.split(', '),
		ended: isEnded(OneStorm.from_to.split(' - ')[1].trim())
	}));
	return Result as Array<StormModel>;
};
