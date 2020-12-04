import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class RecipePuppyService {
  constructor(private http: HttpService) {}

  public async getRecipes(params): Promise<any> {
    const { i } = params;
    const apiUrl = `http://www.recipepuppy.com/api/?i=${i}`;

    const response: any = await this.http.get<any>(apiUrl).toPromise();

    const { results } = response.data;

    return results;
  }
}
