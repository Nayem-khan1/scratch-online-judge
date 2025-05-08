import ScratchJudgeApp from "@/ScratchJudgeApp";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

const inputs = {
  "1": [2, 3],
  "2": [5, 9],
  "3": [1, 2, 3],
};

const expected_outputs = {
  "1": 5,
  "2": 9,
  "3": "3,2,1",
};

export default function ProblemDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const title = t(`problems.${id}.title`);
  const description = t(`problems.${id}.description`);
  const input = inputs[id];
  const expected_output = expected_outputs[id];

  if (!title || !description) {
    return <div className="p-4">{t("not_found")}</div>;
  }

  return (
    <ScratchJudgeApp
      problem={{
        title,
        description,
        input,
        expected_output,
      }}
    />
  );
}
