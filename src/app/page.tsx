import DaySchedules from "@/components/DaySchedules";
import ScheduleButtonInMonth from "@/components/ScheduleButtonInMonth";
import { clsx } from "clsx";
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isWeekend,
  startOfMonth,
} from "date-fns";
import { ja } from "date-fns/locale";

type Schedule = {
  title: string;
  startAt: Date;
  endAt: Date;
};

const initialSchedules: Schedule[] = [
  {
    title: "schedule1",
    startAt: new Date(2023, 10, 1, 10, 0),
    endAt: new Date(2023, 10, 1, 12, 0),
  },
  {
    title: "schedule2",
    startAt: new Date(2023, 10, 2, 12, 0),
    endAt: new Date(2023, 10, 2, 13, 0),
  },
  {
    title: "schedule3",
    startAt: new Date(2023, 10, 2, 13, 0),
    endAt: new Date(2023, 10, 2, 14, 0),
  },
  {
    title: "schedule3",
    startAt: new Date(2023, 10, 2, 15, 0),
    endAt: new Date(2023, 10, 2, 16, 0),
  },
  {
    title: "schedule4",
    startAt: new Date(2023, 10, 2, 15, 0),
    endAt: new Date(2023, 10, 2, 16, 0),
  },
  {
    title: "schedule5",
    startAt: new Date(2023, 10, 2, 18, 0),
    endAt: new Date(2023, 10, 2, 19, 0),
  },
];

export default function Home() {
  const date = new Date();

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

  const getWeekdayString = (date: Date) => {
    return ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
  };

  const weeks = getWeeksWhenStartOfMonday(date);

  return (
    <div className="grid grid-cols-7 grid-rows-5 w-full h-full border border-gray-300">
      {weeks.map((week, row) =>
        week.map((day) => (
          <div
            key={row + getDate(day)}
            className={clsx("col-span-1 row-span-1 border border-gray-300", {
              "bg-red-50": isWeekend(day),
            })}
          >
            <div className="flex flex-col justify-center items-center space-y-1">
              <div className="flex flex-col justify-center items-center ">
                {row === 0 && (
                  <p className="text-xs text-slate-400">
                    {getWeekdayString(day)}
                  </p>
                )}
                <p
                  className={clsx("text-sm", {
                    "bg-blue-600 text-white rounded-full px-1 py-1":
                      day.getMonth() === date.getMonth() &&
                      day.getDate() === date.getDate(),
                  })}
                >
                  {getDate(day)}日
                </p>
              </div>
              <DaySchedules
                schedules={initialSchedules.filter(
                  (schedule) =>
                    schedule.startAt.getFullYear() === day.getFullYear() &&
                    schedule.startAt.getMonth() === day.getMonth() &&
                    schedule.startAt.getDate() === day.getDate()
                )}
                day={day}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
