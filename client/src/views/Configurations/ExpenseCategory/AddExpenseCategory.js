import {
  Button,
  Drawer,
  FormContainer,
  FormItem,
  Input,
  Notification,
  toast,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import React, { forwardRef } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { addExpenseCategory } from "service/configurationService";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const AddExpenseCategory = forwardRef((props, ref) => {
  const { formikRef } = ref || {};
  const {
    disableSubmit = false,
    isOpen,
    onClose,
    onRequestClose,
    setFlag,
  } = props;

  // add Expense Category
  const onSave = async (values, setSubmitting) => {
    setSubmitting(true);

    const payload = {
      name: values.name,
    };

    try {
      const resp = await addExpenseCategory(payload);
      if (resp?.success) {
        toast.push(
          <Notification
            title={"Expense Category Added Successfully"}
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

    setSubmitting(false);
  };

  return (
    <>
      <Drawer
        title="Add Expense Category"
        isOpen={isOpen}
        onClose={onClose}
        onRequestClose={onRequestClose}
      >
        <Formik
          innerRef={formikRef}
          initialValues={{
            name: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setSubmitting(true);
              if (!disableSubmit) {
                onSave(values, setSubmitting);
                onClose();
              } else {
                setSubmitting(false);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ values, touched, errors, isSubmitting }) => (
            <Form>
              <FormContainer>
                <div>
                  <FormItem
                    className="mb-8"
                    label="Name"
                    invalid={errors.name && touched.name}
                    errorMessage={"Name Required"}
                  >
                    <Field
                      type="text"
                      autoComplete="off"
                      name="name"
                      placeholder="Name"
                      component={Input}
                      value={values.name}
                    />
                  </FormItem>
                </div>

                <div className="flex justify-end items-center">
                  <Button
                    size="sm"
                    variant="solid"
                    loading={isSubmitting}
                    icon={<AiOutlineSave />}
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </Drawer>
    </>
  );
});

export default AddExpenseCategory;
