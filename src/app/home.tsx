import CardComp from "@/components/card";
import { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";

const client = createClient({
  space: 'yvbgckwbdwnt',
  accessToken: 'rZ0NDFYyNPT-Y9FbDXWQ-h3e6c8aNuZhvitJKB-KR9o'
});

interface ContentfulFile {
  contentType: string;
  details: object;
  fileName: string;
  url: string;
}

interface CardData {
	heading: string;
	description: {
		content: [
			{
				content: [
					{
						value: string
					}
				]
			}
		]
	};
	thumbnail: { description: string; fields: { file: ContentfulFile } };
	backgroundImage: { description: string; fields: { file: ContentfulFile } };
}

interface ResField {
  fields: CardData;
  sys: { id: string };
}

function HomePage() {
  const [cards, setCards] = useState<ResField[]>([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const response: any = await client.getEntries();
        if (response.items) {
          setCards(response.items);
        }
      } catch (error) {
        console.error('Error fetching entire Contentful collection:', error);
      }
    };

    getCardData();
  }, []);

  return (
    <main className="w-full">
        <h1 className="text-2xl font-sans font-extrabold mb-7">Best Sellers</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <CardComp
              key={index}
              heading={card.fields.heading}
              description={card.fields.description.content[0].content}
              thumbnail={card.fields.thumbnail.fields.file.url}
              backgroundImage={card.fields.backgroundImage?.fields.file.url}
              id={card.sys.id}
            />
          ))}
        </section>
    </main>
  );
}

export default HomePage;
