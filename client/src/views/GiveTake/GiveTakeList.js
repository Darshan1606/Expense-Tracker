import { ConfirmDialog } from "components/shared";
import { Notification, Spinner, Table, toast } from "components/ui";
import TBody from "components/ui/Table/TBody";
import THead from "components/ui/Table/THead";
import Td from "components/ui/Table/Td";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import React, { useState } from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
import { useSelector } from "react-redux";
import { deleteGiveTake } from "service/giveTakeService";
import GiveTakeForm from "./GiveTakeForm";
import { formatDateToDDMMMYYYY } from "utils/helper/helper";

const columns = [
  {
    _id: 1,
    name: "Type",
  },
  {
    _id: 2,
    name: "Person Name",
  },
  {
    _id: 3,
    name: "Amount",
  },
  {
    _id: 4,
    name: "Date",
  },
  {
    _id: 5,
    name: "Deadline",
  },
  {
    _id: 6,
    name: "Action",
  },
];

const GiveTakeList = ({ isLoading, setFlag }) => {
  const giveTakeData = useSelector(
    (state) => state.giveTake.giveTake.setGiveTakeData
  );
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const handleDeleteModal = (data) => {
    setIsDeleteOpen(true);
    setSelectedData(data);
  };

  const onDelete = async () => {
    setIsDeleteOpen(false);
    try {
      const resp = await deleteGiveTake(selectedData?._id);
      if (resp.success) {
        toast.push(
          <Notification
            title={"Entry Deleted Successfully"}
            type="success"
            duration={1500}
          ></Notification>,
          {
            placement: "top-center",
          }
        );
        setFlag(true);
      }
    } catch (err) {
      console.log(err);

      toast.push(
        <Notification
          title={
            err?.response?.data?.error?.message ||
            err?.response?.data?.error ||
            err?.response?.data?.message
          }
          type="danger"
          duration={1500}
        ></Notification>,
        {
          placement: "top-center",
        }
      );
    }
  };

  return (
    <>
      {!isLoading ? (
        giveTakeData?.length > 0 ? (
          <>
            <Table>
              <THead>
                <Tr>
                  {columns.map((item) => {
                    return <Th key={item._id}>{item.name}</Th>;
                  })}
                </Tr>
              </THead>
              <TBody>
                {giveTakeData?.map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item?.give_take}</Td>
                      <Td>{item?.person_name}</Td>
                      <Td>{item?.amount}</Td>
                      <Td>{formatDateToDDMMMYYYY(item?.date)}</Td>
                      <Td>
                        {item?.deadline
                          ? formatDateToDDMMMYYYY(item?.deadline)
                          : ""}
                      </Td>
                      <Td>
                        <div className="flex justify-start text-lg">
                          <span
                            className={`cursor-pointer p-2 hover:text-blue-500`}
                            onClick={() => {
                              setIsModalOpen(true);
                              setSelectedData(item);
                            }}
                          >
                            <HiPencil />
                          </span>
                          <span
                            className={`cursor-pointer p-2 hover:text-red-500`}
                            onClick={() => handleDeleteModal(item)}
                          >
                            <HiOutlineTrash />
                          </span>
                        </div>
                      </Td>
                    </Tr>
                  );
                })}
              </TBody>
            </Table>
          </>
        ) : (
          <>
            <div className="text-center">No Data Found</div>
          </>
        )
      ) : (
        <div className="flex justify-center items-center">
          <Spinner size="2rem" />
        </div>
      )}

      <GiveTakeForm
        intiEntry={selectedData}
        type="edit"
        setFlag={setFlag}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestClose={() => setIsModalOpen(false)}
      />

      <>
        <ConfirmDialog
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onRequestClose={() => setIsDeleteOpen(false)}
          type="danger"
          title="Delete GiveTake"
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={onDelete}
          confirmButtonColor="red-600"
        >
          <p>
            Are you sure you want to delete this GiveTake? This action cannot be
            undone.
          </p>
        </ConfirmDialog>
      </>
    </>
  );
};

export default GiveTakeList;
