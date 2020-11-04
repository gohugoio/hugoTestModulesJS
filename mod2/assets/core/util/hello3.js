import { format } from 'date-fns';
import { hello5 } from './hello5';

export function hello3() {
	let today = format(new Date(), "'Today is a' iiii");
	return `Hello3 from mod2. Date from date-fns: ${today}`;
}

export function hello6() {
	return hello5();
}
