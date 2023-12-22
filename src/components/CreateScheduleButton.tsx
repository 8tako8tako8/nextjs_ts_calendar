"use client";

type Props = {
  handleOpenModal: () => void;
};

const CreateScheduleButton = ({ handleOpenModal }: Props) => {
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 px-3 py-3 rounded-md text-white"
        style={{ position: "fixed", right: "50px" }}
      >
        予定を追加する
      </button>
    </>
  );
};

export default CreateScheduleButton;
