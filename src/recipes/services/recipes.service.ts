import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RecipeDTO, RecipeModel } from '../dto/recipe.dto';
import { Ingredients } from '../interfaces/ingredients';
import { GiphyService } from './giphy.service';
import { RecipePuppyService } from './recipePuppy.service';

@Injectable()
export class RecipesService {
  constructor(
    private readonly recipePuppyService: RecipePuppyService,
    private readonly giphyService: GiphyService,
  ) {}

  public async findAll(params: Ingredients) {
    params.i = params.i.replace(/[\. ;:-]/gi, '');
    const { i } = params;

    if (!i) {
      throw new HttpException(
        'Please enter at least 1 ingredient',
        HttpStatus.BAD_REQUEST,
      );
    }

    const ingredientsValidate = i.split(',');

    if (ingredientsValidate.length > 3) {
      throw new HttpException(
        'Please send a maximum of 3 ingredients',
        HttpStatus.BAD_REQUEST,
      );
    }

    const recipePuppyResponse = await this.recipePuppyService.getRecipes(
      params,
    );

    if (!recipePuppyResponse || !recipePuppyResponse.length) {
      throw new HttpException(
        'No recipes were found for these ingredients.',
        HttpStatus.NOT_FOUND,
      );
    }

    const giphyResponse = await this.giphyService.getGifs(recipePuppyResponse);

    return await this.buildResponse(params, giphyResponse);
  }

  private buildResponse(params, giphyResponse): RecipeDTO {
    const { i } = params;

    const ingredients = i.split(',');

    const finalResponse: RecipeModel[] = giphyResponse.map((response) => {
      const { title, href, ingredients } = response.recipe;

      const titleWithoutCharacters = String(title).trim();

      const { gifLink } = response;

      return {
        title: titleWithoutCharacters,
        ingredients,
        link: href,
        gif: gifLink,
      };
    });
    return {
      keywords: ingredients,
      recipes: finalResponse,
    };
  }
}
