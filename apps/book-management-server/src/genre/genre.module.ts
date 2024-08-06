import { Module } from "@nestjs/common";
import { GenreModuleBase } from "./base/genre.module.base";
import { GenreService } from "./genre.service";
import { GenreController } from "./genre.controller";
import { GenreResolver } from "./genre.resolver";

@Module({
  imports: [GenreModuleBase],
  controllers: [GenreController],
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
})
export class GenreModule {}
