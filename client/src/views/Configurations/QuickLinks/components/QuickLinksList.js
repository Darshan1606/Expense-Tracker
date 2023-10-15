import { ConfirmDialog } from "components/shared";
import { Notification, Spinner, Table, toast } from "components/ui";
import TBody from "components/ui/Table/TBody";
import THead from "components/ui/Table/THead";
import Td from "components/ui/Table/Td";
import Th from "components/ui/Table/Th";
import Tr from "components/ui/Table/Tr";
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { removeQuickLinks } from "service/quickLinksService";
import useQuickLinks from "utils/hooks/useQuickLinks";

const columns = [
  {
    _id: 2,
    name: "Name",
  },
  {
    _id: 3,
    name: "Link",
  },
  {
    _id: 3,
    name: "Action",
  },
];

const QuickLinksList = ({ isLoading, setFlag }) => {
  const { quickLinksData, isDeleteOpen, setIsDeleteOpen } = useQuickLinks();

  const [selectedData, setSelectedData] = useState();

  const handleDeleteModal = (data) => {
    setIsDeleteOpen(true);
    setSelectedData(data);
  };

  const onDelete = async () => {
    setIsDeleteOpen(false);
    try {
      const resp = await removeQuickLinks(selectedData?._id);
      if (resp.success) {
        toast.push(
          <Notification
            title={"Quick Links Deleted Successfully"}
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
          title={err?.response?.data?.error?.message}
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
        quickLinksData?.length > 0 ? (
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
                {quickLinksData?.map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item?.name}</Td>
                      <Td>{item?.link}</Td>
                      <Td>
                        <div className="flex justify-start text-lg">
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

      <>
        <ConfirmDialog
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onRequestClose={() => setIsDeleteOpen(false)}
          type="danger"
          title="Delete Quick Link"
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={onDelete}
          confirmButtonColor="red-600"
        >
          <p>
            Are you sure you want to delete this Quick Link? This action cannot
            be undone.
          </p>
        </ConfirmDialog>
      </>
    </>
  );
};

export default QuickLinksList;
