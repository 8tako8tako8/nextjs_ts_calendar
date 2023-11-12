import DaySchedules from "@/components/DaySchedules";
import { MaterialSymbolsArrowBackIos } from "@/components/MaterialSymbolsArrowBackIos";
import { MaterialSymbolsArrowForwardIos } from "@/components/MaterialSymbolsArrowForwardIos";
import { clsx } from "clsx";
import {
  addMonths,
  addYears,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDate,
  getYear,
  isWeekend,
  startOfMonth,
  subMonths,
  subYears,
} from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

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
    title: "schedule4",
    startAt: new Date(2023, 10, 2, 15, 0),
    endAt: new Date(2023, 10, 2, 16, 0),
  },
  {
    title: "schedule5",
    startAt: new Date(2023, 10, 2, 15, 0),
    endAt: new Date(2023, 10, 2, 16, 0),
  },
  {
    title: "schedule6",
    startAt: new Date(2023, 10, 2, 18, 0),
    endAt: new Date(2023, 10, 2, 19, 0),
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const today = new Date();
  const yearString = searchParams.year || today.getFullYear().toString();
  const monthString = searchParams.month || (today.getMonth() + 1).toString();
  const targetMonth = new Date(Number(yearString), Number(monthString) - 1);

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

  const getPreviousMonthParams = () => {
    const previousMonth = subMonths(targetMonth, 1);
    return format(previousMonth, "'year='yyyy'&month='MM");
  };

  const getNextMonthParams = () => {
    const nextMonth = addMonths(targetMonth, 1);
    return format(nextMonth, "'year='yyyy'&month='MM");
  };

  const weeks = getWeeksWhenStartOfMonday(targetMonth);

  return (
    <>
      <div className="py-5 px-10 border-b flex justify-between items-center">
        <div className="flex justify-center items-end space-x-8">
          <h1 className="text-2xl font-extrabold">
            <Link href="/">8tako8tako8 Calender</Link>
          </h1>
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl">
              {yearString}年{monthString}月
            </h3>
            <div className="flex items-end space-x-2">
              <Link href={`?${getPreviousMonthParams()}`}>
                <MaterialSymbolsArrowBackIos />
              </Link>
              <Link href={`?${getNextMonthParams()}`}>
                <MaterialSymbolsArrowForwardIos />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <nav className="text-sm font-medium">
            <Link
              href="/schedules/new"
              className="bg-blue-500 px-3 py-3 rounded-md text-white"
            >
              予定を追加する
            </Link>
          </nav>
        </div>
      </div>
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
                        day.getMonth() === today.getMonth() &&
                        day.getDate() === today.getDate(),
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
    </>
  );
}
