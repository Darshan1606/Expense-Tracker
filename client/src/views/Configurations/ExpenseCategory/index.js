import { Button, Card, Notification, toast } from "components/ui";
import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import ExpenseCategoryList from "./ExpenseCategoryList";
import AddExpenseCategory from "./AddExpenseCategory";
import { setExpenseCategoryData } from "store/config/configSlice";
import { getAllExpenseCategory } from "service/configurationService";
import { useDispatch } from "react-redux";

const ExpenseCategory = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // get ExpenseCategory list
  const getExpenseCategoryData = async () => {
    setIsLoading(true);
    try {
      let response;
      response = await getAllExpenseCategory();

      dispatch(setExpenseCategoryData(response?.data));

      setFlag(false);
    } catch (err) {
      console.log(err);
      toast.push(
        <Notification
          title={err?.response?.data?.error?.message}
          type="danger"
          duration={1500}
        ></Notification>,
        {
          placement: "top-center",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (flag) {
      getExpenseCategoryData();
    }
    // eslint-disable-next-line
  }, [flag]);

  return (
    <>
      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-sky-500">
            Expense Category
          </div>
          <div>
            <Button
              variant="solid"
              block
              size="sm"
              icon={<HiPlusCircle />}
              onClick={openModal}
            >
              Add Expense Category
            </Button>
          </div>
        </div>

        <AddExpenseCategory
          setFlag={setFlag}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRequestClose={closeModal}
        />
      </Card>
      <Card className="mb-4">
        <ExpenseCategoryList isLoading={isLoading} setFlag={setFlag} />
      </Card>
    </>
  );
};

export default ExpenseCategory;
