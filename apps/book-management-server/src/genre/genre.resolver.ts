import * as graphql from "@nestjs/graphql";
import { GenreResolverBase } from "./base/genre.resolver.base";
import { Genre } from "./base/Genre";
import { GenreService } from "./genre.service";

@graphql.Resolver(() => Genre)
export class GenreResolver extends GenreResolverBase {
  constructor(protected readonly service: GenreService) {
    super(service);
  }
}
