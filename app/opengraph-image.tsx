import { ImageResponse } from "next/og"
import { KeyoOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image"

export const size = ogImageSize
export const contentType = ogImageContentType

export default function OpengraphImage() {
  return new ImageResponse(<KeyoOgImage />, { ...size })
}
