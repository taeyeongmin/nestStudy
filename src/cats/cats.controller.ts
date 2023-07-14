import { CatsService } from './cats.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) { }
	
	@Get()
	findAllCats() {
		
		return 'all cat';
	}

	// cats/:id
	@Get(':id')
	findOneCat() {
		return 'one cat';
	}

	@Post()
	createCat() {
		return 'create cat';
	}

	@Put(':id')
	updateCat() {
		return 'update cat';
	}

	@Delete(':id')
	deleteCat() {
		return 'delete cat';
	}

}
