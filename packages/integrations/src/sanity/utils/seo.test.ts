import { describe, expect, it } from 'vitest'
import type { TSanityCustomImage, TSanityOpenGraph } from '../types'
import { getOpenGraph, resolveImage } from './seo'

describe('resolveImage', () => {
  it('should return empty string when image is undefined', () => {
    expect(resolveImage(undefined)).toBe('')
  })

  it('should return empty string when image asset is undefined', () => {
    const image = {} as TSanityCustomImage
    expect(resolveImage(image)).toBe('')
  })

  it('should return empty string when image asset url is undefined', () => {
    const image = { asset: {} } as TSanityCustomImage
    expect(resolveImage(image)).toBe('')
  })

  it('should return the image URL when available', () => {
    const image = {
      asset: {
        url: 'https://example.com/image.jpg',
      },
    } as TSanityCustomImage
    expect(resolveImage(image)).toBe('https://example.com/image.jpg')
  })
})

describe('getOpenGraph', () => {
  it('should return OpenGraph object with all properties when all args provided', () => {
    const args: TSanityOpenGraph = {
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      image: {
        asset: {
          url: 'https://example.com/image.jpg',
        },
      } as TSanityCustomImage,
    }

    const result = getOpenGraph(args)

    expect(result).toEqual({
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      images: [{ url: 'https://example.com/image.jpg' }],
    })
  })

  it('should handle image without asset by setting empty string as image URL', () => {
    const args: TSanityOpenGraph = {
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      image: {} as TSanityCustomImage,
    }

    const result = getOpenGraph(args)

    expect(result).toEqual({
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      images: [{ url: '' }],
    })
  })

  it('should handle image with undefined asset url by setting empty string as image URL', () => {
    const args: TSanityOpenGraph = {
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      image: {
        asset: {},
      } as TSanityCustomImage,
    }

    const result = getOpenGraph(args)

    expect(result).toEqual({
      _type: 'openGraph',
      title: 'Test Title',
      description: 'Test Description',
      siteName: 'Test Site',
      url: 'https://example.com',
      images: [{ url: '' }],
    })
  })
})
