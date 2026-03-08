import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(() => "🏠")
        .child(
          S.document().schemaType("homepage").documentId("homepage")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "homepage"
      ),
    ]);

