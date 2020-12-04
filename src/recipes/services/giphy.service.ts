import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class GiphyService {
  constructor(private http: HttpService) {}

  public async getGifs(recipes): Promise<any> {
    const gifs = [];
    for (const recipe of recipes) {
      const title = String(recipe.title).trim();

      const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${title}&limit=1&offset=0&rating=g&lang=en`;
      const gifResponse = await this.http.get<any>(apiUrl).toPromise();
      const { data: gif } = gifResponse.data;

      gifs.push({
        gifLink: gif[0].url,
        recipe,
      });
    }
    return gifs;
  }
}
