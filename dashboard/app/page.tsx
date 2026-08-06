import { notion, databaseId } from "./lib/notion";
import CircularProgress from "./components/CircularProgress";
import StatsCard from "./components/StatsCard";

export default async function Home() {
  const response = await notion.dataSources.query({
    data_source_id: databaseId,
  });

  const values: Record<string, number> = {};

for (const page of response.results as any[]) {
  const name = (
    page.properties["Name"]?.title?.[0]?.plain_text ?? ""
  ).trim();

  const value = page.properties["Nummer"]?.number ?? 0;

  values[name] = value;
}

const ects = values["ECTS erreicht"] ?? 0;
const ectsTotal = values["ECTS gesamt"] ?? 0;
const exams = values["Exams bestanden"] ?? 0;

const examsTotal =
  values["Exams gesamt"] ??
  values["Exams gesamt "] ??
  48;
return (
  <main className="flex justify-center bg-gray-100 p-8">
    <div className="flex items-center gap-16 rounded-3xl bg-white p-16 shadow-xl">
      <CircularProgress
        value={ects}
        total={ectsTotal}
      />

      <StatsCard
        ects={ects}
        ectsTotal={ectsTotal}
        exams={exams}
        examsTotal={examsTotal}
      />
    </div>
  </main>
);
}