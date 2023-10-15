import { Button, Card, Notification, toast } from "components/ui";
import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import AddQuickLinks from "./components/AddQuickLinks";
import useQuickLinks from "utils/hooks/useQuickLinks";
import QuickLinksList from "./components/QuickLinksList";
import { useDispatch } from "react-redux";
import {
  // quickLinksList,
  quickLinksListForAdmin,
} from "service/quickLinksService";
import { setQuickLinksData } from "store/quickLinks/quickLinksSlice";

const QuickLinks = () => {
  const { openModal, isModalOpen, closeModal } = useQuickLinks();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(true);

  // get QuickLinks list
  const getQuickLinksData = async () => {
    setIsLoading(true);
    try {
      let response;
      response = await quickLinksListForAdmin();

      dispatch(setQuickLinksData(response?.data));

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
      getQuickLinksData();
    }
    // eslint-disable-next-line
  }, [flag]);

  return (
    <>
      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-sky-500">Quick Links</div>
          <div>
            <Button
              variant="solid"
              block
              size="sm"
              icon={<HiPlusCircle />}
              onClick={openModal}
            >
              Add Quick Links
            </Button>
          </div>
        </div>

        <AddQuickLinks
          setFlag={setFlag}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRequestClose={closeModal}
        />
      </Card>
      <Card className="mb-4">
        <QuickLinksList isLoading={isLoading} setFlag={setFlag} />
      </Card>
    </>
  );
};

export default QuickLinks;
