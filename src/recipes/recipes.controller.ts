import { Ingredients } from './interfaces/ingredients';
import {
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { RecipesService } from './services/recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll(@Query() params: Ingredients) {
    return this.recipesService.findAll(params);
  }
}
