import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  startOfMonth,
} from "date-fns";
import { ja } from "date-fns/locale";

export default function Home() {
  const date = new Date();
  const days = [1, 2, 3, 4, 5, 6, 7];

  console.log(date);

  const getWeeksWhenStartOfMonday = (date: Date) => {
    const mondays = eachWeekOfInterval(
      {
        start: startOfMonth(date),
        end: endOfMonth(date),
      },
      { locale: ja, weekStartsOn: 1 }
    );
    return mondays.map((monday) =>
      eachDayOfInterval({
        start: monday,
        end: endOfWeek(monday, { locale: ja, weekStartsOn: 1 }),
      })
    );
  };

  const weeks = getWeeksWhenStartOfMonday(date);

  return (
    <div className="grid grid-cols-7 grid-rows-5 w-full h-full border border-gray-300">
      {weeks.map((week, row) =>
        week.map((day) => (
          <div
            key={row + getDate(day)}
            className="col-span-1 row-span-1 border border-gray-300"
          >
            <div className="flex flex-col justify-center items-center space-y-1">
              <div className="">{getDate(day)}日</div>
              <button className="w-4/5 bg-black text-white rounded-xl">
                schedule1
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
