import Card from '@/components/Card';
import Header from '@/components/Header';
import { BASE_URL, QUOTES_API } from './urls';

async function getData() {
  const res = await fetch(`${BASE_URL}${QUOTES_API}`);
  const { quotes } = await res.json();
  return quotes as string[];
}

export default async function Home() {
  const data = await getData();

  return (
    <main className='max-w-3xl mx-auto pt-4'>
      <Header />
      {data.map((quote, index) => (
        <Card key={index} description={quote} rank={index + 1} />
      ))}
    </main>
  );
}
