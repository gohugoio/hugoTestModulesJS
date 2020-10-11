import { defaultConfig } from '../config';

export function hello1() {
	return `Hello1 from mod1: ${defaultConfig.greeting}`;
}
