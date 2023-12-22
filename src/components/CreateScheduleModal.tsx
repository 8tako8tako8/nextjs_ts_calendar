"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HighlightOffBlack24Dp } from "./HighlightOffBlack24Dp";

const CreateScheduleModal = () => {
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [scheduleDate, setScheduleDate] = useState<Date>();
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();

  const handleCreateSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // router.push("/");
    // router.refresh();
  };

  return (
    <div className="modal_wrap">
      <section className="modalArea modalActive">
        <div className="modalWrapper rounded-lg">
          <div className="modalContents">
            <form
              className="bg-slate-200 p-6 rounded shadow-lg"
              onSubmit={handleCreateSchedule}
            >
              <div className="flex justify-end">
                <HighlightOffBlack24Dp />
              </div>
              <div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    タイトル
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm fontfkjj-bold mb-2">
                    予定日
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    type="date"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    onChange={(e) => setScheduleDate(new Date(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm fontfkjj-bold mb-2">
                    開始時間
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    type="time"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    onChange={(e) => setStartTime(new Date(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm fontfkjj-bold mb-2">
                    終了時間
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    type="time"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    onChange={(e) => setEndTime(new Date(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-500 px-3 py-3 rounded-md text-white">
                  追加
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateScheduleModal;
