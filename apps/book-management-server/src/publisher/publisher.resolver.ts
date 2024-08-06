import * as graphql from "@nestjs/graphql";
import { PublisherResolverBase } from "./base/publisher.resolver.base";
import { Publisher } from "./base/Publisher";
import { PublisherService } from "./publisher.service";

@graphql.Resolver(() => Publisher)
export class PublisherResolver extends PublisherResolverBase {
  constructor(protected readonly service: PublisherService) {
    super(service);
  }
}
