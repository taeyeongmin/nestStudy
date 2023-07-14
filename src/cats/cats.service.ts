import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

	findAllCats() {
		return 'findAllCats 호출';
	}
}
