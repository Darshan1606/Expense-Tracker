import {
  Button,
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
import { addIncome, editIncome } from "service/incomeService";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  month: Yup.object().required(),
  year: Yup.number().required(),
  amount: Yup.number().required(),
  incomeFrom: Yup.string().required(),
});

const months = [
  {
    value: "january",
    label: "January",
  },
  {
    value: "february",
    label: "February",
  },
  {
    value: "march",
    label: "March",
  },
  {
    value: "april",
    label: "April",
  },
  {
    value: "may",
    label: "May",
  },
  {
    value: "june",
    label: "June",
  },
  {
    value: "july",
    label: "July",
  },
  {
    value: "august",
    label: "August",
  },
  {
    value: "september",
    label: "September",
  },
  {
    value: "october",
    label: "October",
  },
  {
    value: "november",
    label: "November",
  },
  {
    value: "december",
    label: "December",
  },
];

const IncomeForm = forwardRef((props, ref) => {
  const { formikRef } = ref || {};
  const {
    incomeData,
    type = "add",
    disableSubmit = false,
    isOpen,
    onClose,
    onRequestClose,
    setFlag,
  } = props;
  console.log("incomeData", incomeData);
  // add Income
  const onSave = async (values, setSubmitting) => {
    setSubmitting(true);

    const payload = {
      month: values.month?.value,
      year: values.year,
      amount: values.amount,
      income_from: values.incomeFrom,
    };
    if (type === "add") {
      try {
        const resp = await addIncome(payload);
        if (resp?.success) {
          toast.push(
            <Notification
              title={"Income Added Successfully"}
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
    } else if (type === "edit") {
      try {
        const resp = await editIncome(incomeData?._id, payload);
        if (resp?.success) {
          toast.push(
            <Notification
              title={"Income Updated Successfully"}
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

  return (
    <>
      <Drawer
        title={type === "add" ? "Add Income" : "Edit Income"}
        isOpen={isOpen}
        onClose={onClose}
        onRequestClose={onRequestClose}
      >
        <Formik
          innerRef={formikRef}
          initialValues={{
            month: incomeData?.month
              ? months?.filter(
                  (item, i) => item?.value === incomeData?.month
                )[0]
              : "",
            year: incomeData?.year ? incomeData?.year : "",
            amount: incomeData?.amount ? incomeData?.amount : "",
            incomeFrom: incomeData?.income_from ? incomeData?.income_from : "",
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
              {console.log("errors", errors)}
              <FormContainer>
                <FormItem
                  className="mb-8"
                  label="Month"
                  invalid={errors.month && touched.month}
                  errorMessage={"Month Required"}
                >
                  <Field name="month">
                    {({ field, form }) => (
                      <Select
                        defaultValue={field.value}
                        placeholder="Please Select"
                        options={months}
                        onChange={(val) => {
                          form.setFieldValue(field.name, val);
                        }}
                      ></Select>
                    )}
                  </Field>
                </FormItem>
                <FormItem
                  className="mb-8"
                  label="Year"
                  invalid={errors.year && touched.year}
                  errorMessage={"Year Required"}
                >
                  <Field
                    type="number"
                    autoComplete="off"
                    name="year"
                    placeholder="Year"
                    component={Input}
                    value={values.year}
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
                  label="Income From"
                  invalid={errors.incomeFrom && touched.incomeFrom}
                  errorMessage={"Income From Required"}
                >
                  <Field
                    type="text"
                    autoComplete="off"
                    name="incomeFrom"
                    placeholder="Income From"
                    component={Input}
                    value={values.incomeFrom}
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

export default IncomeForm;
