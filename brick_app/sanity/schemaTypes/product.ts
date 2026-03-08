import { defineField, defineType } from "sanity";

const portableTextBlocks = [
  { type: "block" },
  {
    type: "image",
    options: { hotspot: true },
  },
];

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "object",
      fields: [
        { name: "en", type: "string", title: "English" },
        { name: "vi", type: "string", title: "Tiếng Việt" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name.en",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "productCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          name: "en",
          type: "array",
          title: "English",
          of: portableTextBlocks,
        },
        {
          name: "vi",
          type: "array",
          title: "Tiếng Việt",
          of: portableTextBlocks,
        },
      ],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "object",
      fields: [
        { name: "material", type: "string", title: "Material" },
        { name: "finish", type: "string", title: "Finish" },
        { name: "thickness", type: "string", title: "Thickness" },
        { name: "origin", type: "string", title: "Origin" },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name.en",
      media: "thumbnail",
      category: "category",
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title: title || "Untitled Product",
        media,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : "",
      };
    },
  },
});
