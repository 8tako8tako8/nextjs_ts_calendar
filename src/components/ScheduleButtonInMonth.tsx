import React from "react";

type Schedule = {
  title: string;
  startAt: Date;
  endAt: Date;
};

type Props = {
  schedule: Schedule;
  index: number;
};

const ScheduleButtonInMonth = ({ schedule }: Props) => {
  return (
    <button
      key={schedule.title}
      className="w-4/5 bg-black text-white rounded-xl"
    >
      {schedule.title}
    </button>
  );
};

export default ScheduleButtonInMonth;
