import { Suspense } from "react";

async function getData() {
  const res = await fetch('https://randomuser.me/api/', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

export default async function Page() {
    const data = await getData();
    // We need to map the data
      
    return (
      <>
        <main>
          <ul>
            {data.results.map((results => (
              <li key={results.name} />
            ))),
          }
          </ul>
          <p>finished</p>
        </main>
      </>
    )
}