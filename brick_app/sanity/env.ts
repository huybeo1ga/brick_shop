export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gkz9rr88";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const useCdn = process.env.NODE_ENV === 'production'

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable for Sanity'
  )
}

if (!dataset) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_DATASET environment variable for Sanity'
  )
}

