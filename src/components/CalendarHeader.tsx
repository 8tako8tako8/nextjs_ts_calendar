"use client";

import { addMonths, format, subMonths } from "date-fns";
import Link from "next/link";
import { MaterialSymbolsArrowBackIos } from "@/components/MaterialSymbolsArrowBackIos";
import { MaterialSymbolsArrowForwardIos } from "@/components/MaterialSymbolsArrowForwardIos";
import CreateScheduleComponent from "./CreateScheduleComponent";

type Props = {
  yearString: string | string[];
  monthString: string | string[];
  targetMonth: Date;
};

const CalendarHeader = ({ yearString, monthString, targetMonth }: Props) => {
  const getPreviousMonthParams = () => {
    const previousMonth = subMonths(targetMonth, 1);
    return format(previousMonth, "'year='yyyy'&month='MM");
  };

  const getNextMonthParams = () => {
    const nextMonth = addMonths(targetMonth, 1);
    return format(nextMonth, "'year='yyyy'&month='MM");
  };

  return (
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
      <CreateScheduleComponent />
    </div>
  );
};

export default CalendarHeader;
