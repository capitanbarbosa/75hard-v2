import Checkbox from "@/ui/checkbox";
import TodaysTasks from ".";

export default function Task({ task, updateTask = () => {} }) {
  const { name, completedAt } = task;

  return (
    <div className="flex space-x-3">
      <div>
        <Checkbox
          value={completedAt}
          onChange={(checked) =>
            updateTask({
              ...task,
              completedAt: checked ? new Date() : undefined,
            })
          }
        />
      </div>
      <div>
        <div className="flex-grow">
          <span className={completedAt ? "line-through" : ""}>{name}</span>
        </div>
      </div>
    </div>
  );
}
