import {
  Button,
  DatePicker,
  Drawer,
  FormContainer,
  FormItem,
  Input,
  Notification,
  Select,
  toast,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import React, { forwardRef } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { addGiveTake, editGiveTake } from "service/giveTakeService";
import { formatDateInYYYYMMDD } from "utils/helper/helper";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  giveTake: Yup.object().required(),
  personName: Yup.string().required(),
  amount: Yup.number().required(),
  date: Yup.date().required(),
  description: Yup.string().required(),
});

const giveOrTakeOptions = [
  {
    value: "give",
    label: "Give",
  },
  {
    value: "take",
    label: "Take",
  },
];

const GiveTakeForm = forwardRef((props, ref) => {
  const { formikRef } = ref || {};
  const {
    intiEntry,
    type = "add",
    disableSubmit = false,
    isOpen,
    onClose,
    onRequestClose,
    setFlag,
  } = props;

  // add GiveTake
  const onSave = async (values, setSubmitting) => {
    setSubmitting(true);

    const payload = {
      give_take: values?.giveTake?.value,
      person_name: values?.personName,
      amount: values?.amount,
      date: formatDateInYYYYMMDD(values?.date),
      deadline: values?.deadline ? formatDateInYYYYMMDD(values?.deadline) : "",
      description: values?.description,
    };
    if (type === "add") {
      try {
        const resp = await addGiveTake(payload);
        if (resp?.success) {
          toast.push(
            <Notification
              title={"Entry Added Successfully"}
              type="success"
              duration={1500}
            ></Notification>,
            {
              placement: "top-center",
            }
          );
          setFlag(true);
        } else {
          toast.push(
            <Notification
              title={resp?.message}
              type="success"
              duration={1500}
            ></Notification>,
            {
              placement: "top-center",
            }
          );
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
    } else if (type === "edit") {
      try {
        const resp = await editGiveTake(intiEntry?._id, payload);
        if (resp?.success) {
          toast.push(
            <Notification
              title={"Entry Updated Successfully"}
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
    }

    setSubmitting(false);
  };
  console.log("intiEntry", intiEntry);
  return (
    <>
      <Drawer
        title={type === "add" ? "New Entry" : "Edit Entry"}
        isOpen={isOpen}
        onClose={onClose}
        onRequestClose={onRequestClose}
      >
        <Formik
          innerRef={formikRef}
          initialValues={{
            giveTake: intiEntry?.give_take
              ? giveOrTakeOptions?.filter(
                  (item, i) => item?.value === intiEntry?.give_take
                )[0]
              : "",
            personName: intiEntry?.person_name ? intiEntry?.person_name : "",
            amount: intiEntry?.amount ? intiEntry?.amount : "",
            date: intiEntry?.date ? new Date(intiEntry?.date) : "",
            deadline: intiEntry?.deadline ? new Date(intiEntry?.deadline) : "",
            description: intiEntry?.description ? intiEntry?.description : "",
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
              {console.log("values", values)}
              <FormContainer>
                <FormItem
                  className="mb-8"
                  label="Give Or Take"
                  invalid={errors.giveTake && touched.giveTake}
                  errorMessage={"Give Or Take Required"}
                >
                  <Field name="giveTake">
                    {({ field, form }) => (
                      <Select
                        defaultValue={field.value}
                        placeholder="Please Select"
                        options={giveOrTakeOptions}
                        onChange={(val) => {
                          form.setFieldValue(field.name, val);
                        }}
                      ></Select>
                    )}
                  </Field>
                </FormItem>
                <FormItem
                  className="mb-8"
                  label="Person Name"
                  invalid={errors.personName && touched.personName}
                  errorMessage={"Person Name Required"}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="personName"
                    placeholder="Person Name"
                    component={Input}
                    value={values.personName}
                  />
                </FormItem>
                <FormItem
                  className="mb-8"
                  label="Amount"
                  invalid={errors.amount && touched.amount}
                  errorMessage={"Amount Required"}
                >
                  <Field
                    type="number"
                    autoComplete="off"
                    name="amount"
                    placeholder="Amount"
                    component={Input}
                    value={values.amount}
                  />
                </FormItem>
                <FormItem
                  className="mb-8"
                  label="Date"
                  invalid={errors.date && touched.date}
                  errorMessage={"Date Required"}
                >
                  <Field name="date">
                    {({ field, form }) => (
                      <DatePicker
                        field={field}
                        form={form}
                        value={field.value}
                        placeholder={`Select Date`}
                        onChange={(date) => {
                          form.setFieldValue(field.name, date);
                        }}
                      />
                    )}
                  </Field>
                </FormItem>
                <FormItem className="mb-8" label="Deadline Date">
                  <Field name="deadline">
                    {({ field, form }) => (
                      <DatePicker
                        field={field}
                        form={form}
                        value={field.value}
                        placeholder={`Select Date`}
                        onChange={(date) => {
                          form.setFieldValue(field.name, date);
                        }}
                      />
                    )}
                  </Field>
                </FormItem>
                <FormItem
                  className="mb-8"
                  label="Description"
                  invalid={errors.description && touched.description}
                  errorMessage={"Description Required"}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="description"
                    placeholder="Description"
                    component={Input}
                    value={values.description}
                  />
                </FormItem>

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

export default GiveTakeForm;
