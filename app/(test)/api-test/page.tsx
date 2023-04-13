async function getData() {
  const res = await fetch('/api/hello');
  if (!res.ok) {
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
        </main>
    )
}