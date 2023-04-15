async function getData() {
  const res = await fetch('https://randomuser.me/api/', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
          {/* <p>{data.gender}</p> */}
          <p>finished</p>
        </main>
    )
}