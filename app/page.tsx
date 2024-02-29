import { db } from "@/lib/db";

export default async function Home() {
  console.time("notes")
  const notes = await db.notes.findMany({})
  console.timeEnd("notes")

  return (
    <div>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n.name}</li>
        ))}
      </ul>
    </div>
  );
}
