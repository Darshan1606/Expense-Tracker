import { Button, Card } from "components/ui";
import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { setIncomeData } from "store/income/incomeSlice";
import { getAllIncome } from "service/incomeService";
import { useDispatch } from "react-redux";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";
import useAuth from "utils/hooks/useAuth";

const Income = () => {
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

  // get Income list
  const getIncomeData = async () => {
    setIsLoading(true);
    try {
      let response;
      response = await getAllIncome();
      if (response?.success) {
        dispatch(setIncomeData(response?.result));

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
      getIncomeData();
    }
    // eslint-disable-next-line
  }, [flag]);

  return (
    <>
      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-sky-500">Income</div>
          <div>
            <Button
              variant="solid"
              block
              size="sm"
              icon={<HiPlusCircle />}
              onClick={openModal}
            >
              Add Income
            </Button>
          </div>
        </div>

        <IncomeForm
          type="add"
          setFlag={setFlag}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRequestClose={closeModal}
        />
      </Card>
      <Card className="mb-4">
        <IncomeList isLoading={isLoading} setFlag={setFlag} />
      </Card>
    </>
  );
};

export default Income;
