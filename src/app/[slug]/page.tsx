'use client'

export default function CardPage({ params }: { params: { slug: string } }) {
  return <div>My Card: {params.slug}</div>
}