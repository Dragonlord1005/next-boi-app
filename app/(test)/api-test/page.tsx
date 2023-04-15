async function getData() {
  const res = await fetch('https://randomuser.me/api/?inc=name');
  if (!res.ok) {
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

export default async function Page() {
    const data = await getData();
    const final = data.results;
    console.log(data);
    console.log(final)
    return (
        <main>
          <p>{final.first}</p>
          {/* <p>finished</p> */}
        </main>
    )
}