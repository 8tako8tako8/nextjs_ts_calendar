import React from "react";
import ScheduleButtonInMonth from "./ScheduleButtonInMonth";

type Schedule = {
  title: string;
  startAt: Date;
  endAt: Date;
};

type Props = {
  schedules: Schedule[];
  day: Date;
};

const DaySchedules = ({ schedules, day }: Props) => {
  return (
    <>
      {schedules.slice(0, 3).map((schedule, index) => (
        <ScheduleButtonInMonth key={index} schedule={schedule} index={index} />
      ))}
      {schedules.length > 3 && (
        <p className="text-xs text-gray-500">{`他 ${
          schedules.length - 3
        } 件`}</p>
      )}
    </>
  );
};

export default DaySchedules;
