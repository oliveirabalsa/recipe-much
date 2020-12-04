import { Module, HttpModule, CacheModule } from '@nestjs/common';
import { RecipesService } from './services/recipes.service';
import { RecipesController } from './recipes.controller';
import { GiphyService } from './services/giphy.service';
import { RecipePuppyService } from './services/recipePuppy.service';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [RecipesController],
  providers: [RecipesService, GiphyService, RecipePuppyService],
})
export class RecipesModule {}
