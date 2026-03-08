import { groq } from "next-sanity";

/**
 * Fetch homepage content for a given locale.
 * Pass $locale ("en" | "vi") for localized text.
 */
export const HOMEPAGE_QUERY = groq`
  *[_type == "homepage"][0] {
    heroSection {
      heroSlides[] {
        "title": coalesce(title[$locale], title.en),
        "subtitle": coalesce(subtitle[$locale], subtitle.en),
        title,
        subtitle,
        backgroundImage,
        imageExterior,
        imageInterior
      },
      primaryCTA {
        "text": coalesce(text[$locale], text.en),
        href
      },
      secondaryCTA {
        "text": coalesce(text[$locale], text.en),
        href
      },
      ctaButtons[] {
        "text": coalesce(text[$locale], text.en),
        href
      }
    },
    productSection {
      "title": coalesce(title[$locale], title.en),
      "viewMoreText": coalesce(viewMoreText[$locale], viewMoreText.en),
      "categories": coalesce(featuredCategories, categories)[]-> {
        _id,
        "slug": slug.current,
        "name": coalesce(name[$locale], name.en),
        image
      }
    },
    introSection {
      "title": coalesce(title[$locale], title.en),
      "description": coalesce(description[$locale], description.en),
      "buttonText": coalesce(buttonText[$locale], buttonText.en),
      videoUrl,
      backgroundImage
    },
    serviceSection {
      "title": coalesce(title[$locale], title.en),
      "subtitle": coalesce(subtitle[$locale], subtitle.en),
      "description": coalesce(description[$locale], description.en),
      "services": services[]-> {
        _id,
        "title": coalesce(title[$locale], title.en),
        image,
        "description": coalesce(description[$locale], description.en)
      }
    },
    blogSection {
      "title": coalesce(title[$locale], title.en),
      "subtitle": coalesce(subtitle[$locale], subtitle.en),
      "latestPosts": coalesce(featuredPosts, latestPosts)[]-> {
        _id,
        "title": coalesce(title[$locale], title.en),
        "slug": slug.current,
        publishedAt,
        featuredImage,
        "excerpt": coalesce(excerpt[$locale], excerpt.en)
      }
    }
  }
`;

/**
 * Fetch all published blog posts for the list view.
 * Pass $locale ("en" | "vi") for localized title and excerpt.
 * Example: *[_type == "blogPost"] | order(publishedAt desc)[0...3]
 */
export const BLOG_POSTS_QUERY = groq`
  *[_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    "title": coalesce(title[$locale], title.en),
    "slug": slug.current,
    publishedAt,
    featuredImage,
    "excerpt": coalesce(excerpt[$locale], excerpt.en),
    author
  }
`;

/**
 * Fetch a single blog post by slug for the detail view.
 * Pass $locale for localized title, excerpt, and content.
 */
export const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    "title": coalesce(title[$locale], title.en),
    "slug": slug.current,
    publishedAt,
    featuredImage,
    "excerpt": coalesce(excerpt[$locale], excerpt.en),
    "content": coalesce(content[$locale], content.en),
    author
  }
`;

/**
 * Fetch all published products for the list view.
 * Use $locale ("en" | "vi") to get localized name.
 */
export const PRODUCTS_QUERY = groq`
  *[_type == "product" && defined(slug.current) && !(_id in path("drafts.**"))] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    "category": category-> {
      _id,
      "slug": slug.current,
      "name": coalesce(name[$locale], name.en)
    },
    thumbnail,
    mainImage,
    "name": coalesce(name[$locale], name.en),
    featured
  }
`;

/**
 * Fetch product categories for filter (from productCategory documents).
 */
export const PRODUCT_CATEGORIES_QUERY = groq`
  *[_type == "productCategory" && defined(slug.current)] | order(order asc) {
    _id,
    "slug": slug.current,
    "name": coalesce(name[$locale], name.en)
  }
`;

/**
 * Fetch a single product by slug for the detail view.
 * Use $locale for localized name and description.
 */
export const PRODUCT_BY_SLUG_QUERY = groq`
  *[_type == "product" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    "slug": slug.current,
    "name": coalesce(name[$locale], name.en),
    "description": coalesce(description[$locale], description.en),
    "category": category-> {
      _id,
      "slug": slug.current,
      "name": coalesce(name[$locale], name.en)
    },
    thumbnail,
    mainImage,
    gallery,
    specifications,
    featured
  }
`;
