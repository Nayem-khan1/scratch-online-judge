import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const problems = ["1", "2", "3"];

export default function Problem() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (id) => {
    navigate(`/problems/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t("problem_list_title")}</h1>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                <th className="p-4 font-medium">#</th>
                <th className="p-4 font-medium">{t("navbar.problems")}</th>
                <th className="p-4 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((id, index) => (
                <tr
                  key={id}
                  className="cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                  onClick={() => handleClick(id)}
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 text-blue-600 dark:text-blue-400 font-medium">
                    {t(`problems.${id}.title`)}
                  </td>
                  <td className="p-4">Easy</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
