import { format } from 'date-fns';

export function hello3() {
	let today = format(new Date(), "'Today is a' iiii");
	return `Hello3 from mod2. Date from date-fns: ${today}`;
}
