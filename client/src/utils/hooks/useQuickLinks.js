import { useState } from "react";
import { useSelector } from "react-redux";

function useQuickLinks() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const quickLinksData = useSelector(
    (state) => state?.quickLinks?.quickLinks?.setQuickLinksData
  );

  // close drawer
  const closeModal = () => {
    setModalOpen(false);
  };

  // open drawer
  const openModal = () => {
    setModalOpen(true);
  };

  return {
    isModalOpen,
    quickLinksData,
    isDeleteOpen,
    closeModal,
    openModal,
    setIsDeleteOpen,
  };
}

export default useQuickLinks;
