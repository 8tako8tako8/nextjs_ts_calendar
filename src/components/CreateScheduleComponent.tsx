"use client";

import { useState } from "react";
import CreateScheduleModal from "./CreateScheduleModal";
import CreateScheduleButton from "./CreateScheduleButton";

const CreateScheduleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <CreateScheduleButton handleOpenModal={handleOpenModal} />
      {isModalOpen && <CreateScheduleModal />}
    </>
  );
};

export default CreateScheduleComponent;
