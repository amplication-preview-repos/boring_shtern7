/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BookService } from "../book.service";
import { BookCreateInput } from "./BookCreateInput";
import { Book } from "./Book";
import { BookFindManyArgs } from "./BookFindManyArgs";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";
import { BookUpdateInput } from "./BookUpdateInput";

export class BookControllerBase {
  constructor(protected readonly service: BookService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Book })
  async createBook(@common.Body() data: BookCreateInput): Promise<Book> {
    return await this.service.createBook({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Book] })
  @ApiNestedQuery(BookFindManyArgs)
  async books(@common.Req() request: Request): Promise<Book[]> {
    const args = plainToClass(BookFindManyArgs, request.query);
    return this.service.books({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Book })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async book(
    @common.Param() params: BookWhereUniqueInput
  ): Promise<Book | null> {
    const result = await this.service.book({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Book })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBook(
    @common.Param() params: BookWhereUniqueInput,
    @common.Body() data: BookUpdateInput
  ): Promise<Book | null> {
    try {
      return await this.service.updateBook({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Book })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBook(
    @common.Param() params: BookWhereUniqueInput
  ): Promise<Book | null> {
    try {
      return await this.service.deleteBook({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
