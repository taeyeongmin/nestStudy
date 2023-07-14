import { HttpExceptionFilter } from './../exception.filter';
import { CatsService } from './cats.service';
import { Controller, Delete, Get, HttpException, Post, Put, UseFilters } from '@nestjs/common';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) { }
	
	@Get()
	@UseFilters(HttpExceptionFilter)
	findAllCats() {
		
		throw new HttpException('api is broken', 401);
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
