import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    id: "1",
    title: "Add Two Numbers",
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Find Maximum Number",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Reverse a List",
    difficulty: "Easy",
  },
];

export default function ProblemListPage() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/problems/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🧠 Problem List</h1>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                <th className="p-4 font-medium">#</th>
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem, index) => (
                <tr
                  key={problem.id}
                  className="cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                  onClick={() => handleClick(problem.id)}
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 text-blue-600 dark:text-blue-400 font-medium">
                    {problem.title}
                  </td>
                  <td className="p-4">{problem.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
