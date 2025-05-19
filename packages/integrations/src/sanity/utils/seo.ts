import { IOpenGraph, TSanityCustomImage, TSanityOpenGraph } from '../types'

/**
 * Generates OpenGraph metadata from the provided arguments.
 *
 * @param args - The arguments containing OpenGraph data.
 * @returns The generated IOpenGraph object.
 */
export const getOpenGraph = (args: TSanityOpenGraph): IOpenGraph => {
  const { description, image, title, _type, siteName, url } = args
  const getImage = image ? resolveImage(image) : null
  const values = {
    _type,
    description,
    siteName,
    url,
    title,
    images: [{ url: getImage ?? '' }],
  }
  return values
}

/**
 * Resolves the URL of an image from the provided custom image object.
 *
 * @param image - The optional custom image object.
 * @returns The URL of the image, or an empty string if not available.
 */
export const resolveImage = (image?: TSanityCustomImage): string => {
  return image?.asset?.url ?? ''
}
