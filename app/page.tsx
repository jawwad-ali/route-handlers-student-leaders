import UserForm from "./components/UserForm";

export default async function Home() {

  // cache: no-store because api can fetch new data every time

  const url = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store"
  })
  const res = await url.json()

  return (
    <main className="ml-10">

      {/* Component for Send user Dataa */}
      <UserForm />

      {res.map((name: any) => (
        <h1>{name.fullname}</h1>
      ))}

    </main>
  );
}
