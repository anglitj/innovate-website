import { getInnovations } from "@/app/_lib/data-service";

const columnHeader = [
  "id",
  "dateSubmitted",
  "employeeName",
  "problem",
  "proposedSolution",
];

export default async function Ideas() {
  console.log("a");
  const data = await getInnovations();

  console.log("data", data);

  return (
    <table>
      {/* Table Header */}
      <thead>
        <tr>
          {columnHeader.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      {/* Table Data */}
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.dateSubmitted}</td>
            <td>{item.employeeName}</td>
            <td>{item.problem}</td>
            <td>{item.proposedSolution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
