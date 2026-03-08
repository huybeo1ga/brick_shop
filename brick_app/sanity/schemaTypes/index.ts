import type { SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { product } from "./product";
import { productCategory } from "./productCategory";
import { service } from "./service";
import { serviceSection } from "./serviceSection";
import { homepage } from "./homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, product, productCategory, service, serviceSection, homepage],
};

