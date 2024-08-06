import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GenreService } from "./genre.service";
import { GenreControllerBase } from "./base/genre.controller.base";

@swagger.ApiTags("genres")
@common.Controller("genres")
export class GenreController extends GenreControllerBase {
  constructor(protected readonly service: GenreService) {
    super(service);
  }
}
