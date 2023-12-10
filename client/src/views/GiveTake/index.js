import { Button, Card } from "components/ui";
import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { getAllGiveTake } from "service/giveTakeService";
import GiveTakeForm from "./GiveTakeForm";
import { setGiveTakeData } from "store/giveTake/giveTakeSlice";
import GiveTakeList from "./GiveTakeList";
import useAuth from "utils/hooks/useAuth";

const GiveTake = () => {
  const dispatch = useDispatch();
  const { signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // get give and take list
  const getGiveTakeData = async () => {
    setIsLoading(true);
    try {
      let response;
      response = await getAllGiveTake();

      if (response?.success) {
        dispatch(setGiveTakeData(response?.result));
        setFlag(false);
      } else {
        if (response?.isAuth === false) {
          signOut();
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (flag) {
      getGiveTakeData();
    }
    // eslint-disable-next-line
  }, [flag]);
  return (
    <>
      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-sky-500">Give & Take</div>
          <div>
            <Button
              variant="solid"
              block
              size="sm"
              icon={<HiPlusCircle />}
              onClick={openModal}
            >
              New Entry
            </Button>
          </div>
        </div>

        <GiveTakeForm
          type="add"
          setFlag={setFlag}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRequestClose={closeModal}
        />
      </Card>
      <Card className="mb-4">
        <GiveTakeList isLoading={isLoading} setFlag={setFlag} />
      </Card>
    </>
  );
};

export default GiveTake;
