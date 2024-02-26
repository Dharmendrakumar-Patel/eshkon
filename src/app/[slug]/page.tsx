"use client"
import { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";
import Image from "next/image";

const client = createClient({
  space: 'yvbgckwbdwnt',
  accessToken: 'rZ0NDFYyNPT-Y9FbDXWQ-h3e6c8aNuZhvitJKB-KR9o'
});

interface CardData {
  heading: string;
  description: {
    content: [{ content: [{ value: string }] }];
  };
  backgroundImage?: {
    description: string;
    fields: { file: { contentType: string; details: object; fileName: string; url: string } };
  };
}

export default function CardPage({ params }: { params: { slug: string } }) {
  const [cardDetail, setCardDetail] = useState<CardData | null>(null);
  
  useEffect(() => {
    const getCardData = async () => {
      try {
        const response: any = await client.getEntry(params.slug);
        if (response.fields) {
          setCardDetail(response.fields);
        }
      } catch (error) {
        console.error('Error fetching entire Contentful collection:', error);
      }
    };

    getCardData();
  }, [params.slug]);
  
  return (
    <>
      {cardDetail && (
        <main className="w-screen p-8 md:p-14 lg:p-18 xl:p-20">
          <h1 className="mb-4 text-2xl font-bold">{cardDetail.heading}</h1>
          <div className="flex w-full items-center justify-center mb-7">
            {cardDetail.backgroundImage?.fields?.file.url && (
              <Image src={'https:' + cardDetail.backgroundImage?.fields?.file.url} width={350} height={175} alt="demo" />
            )}
          </div>
          {cardDetail.description?.content[0]?.content.map((text, index) => (
            <>
              <p key={index} className='indent-1 text-left'>{text.value}</p>
              <br />
            </>
          ))}
        </main>
      )}
    </>
  );
}
