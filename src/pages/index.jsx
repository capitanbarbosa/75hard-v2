import { format } from "date-fns";
import TodaysTasks from "@/features/tasks/today";

export default function Homepage({ tasks }) {
  return <TodaysTasks tasks={tasks} />;
}

export function getServerSideProps() {
  const tasks = require("@/mocks/tasks.json");
  const todaysDate = Object.keys(tasks).find(
    (key) => key === format(new Date(), "yyyy-MM-dd")
  );

  return {
    props: {
      tasks: tasks[todaysDate],
    },
  };
}
