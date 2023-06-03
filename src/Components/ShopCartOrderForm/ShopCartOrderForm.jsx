import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { makeOrder } from "../../Utilities/helpers";
import * as SC from "./ShopCartOrderStyle";
import ShopCartList from "../ShopCartList/ShopCartList";
import productsCartContext from "../../context/productsCartContext";

const ShopCartOrderForm = () => {
  const { totalPrice } = useContext(productsCartContext);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().min(7, "Too Short!").required("Phone is required"),
    address: Yup.string().min(7, "Too Short!").required("Address is required"),
  });

  const totalOrder = !totalPrice ? "You haven't ordered yet" : totalPrice;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: null,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      makeOrder(values)
        .then((response) =>
          toast.success(
            `Name: ${response.name}, Email: ${response.email}, Phone:${response.phone}, Address: ${response.address}, Sum for payment: ${totalOrder}`
          )
        )
        .catch((error) => toast.error(`${error}`));
      resetForm();
    },
  });

  return (
    <SC.PageContainer>
      <SC.Form onSubmit={formik.handleSubmit}>
        <SC.FormContainer>
          <SC.GeneralInputContainer>
            <SC.InputContainer>
              <SC.Label htmlFor="name">Your Name</SC.Label>
              <SC.Input
                id="name"
                name="name"
                value={formik.values.name}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name ? (
                <div name="name">{formik.errors.name}</div>
              ) : null}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.Label htmlFor="email">Your email</SC.Label>
              <SC.Input
                id="email"
                name="email"
                value={formik.values.email}
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email ? (
                <div name="email">{formik.errors.email}</div>
              ) : null}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.Label htmlFor="phone">Your phone</SC.Label>
              <SC.Input
                id="phone"
                name="phone"
                value={formik.values.phone}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.phone ? (
                <div name="name">{formik.errors.phone}</div>
              ) : null}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.Label htmlFor="address">Your address</SC.Label>
              <SC.Input
                id="address"
                name="address"
                value={formik.values.address}
                type="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email ? (
                <div name="address">{formik.errors.address}</div>
              ) : null}
            </SC.InputContainer>
          </SC.GeneralInputContainer>
          <ShopCartList />
        </SC.FormContainer>
        <SC.TotalContainer>
          <SC.TotalPrice>Total order: {totalOrder}</SC.TotalPrice>
          <SC.Button type="submit">Make Your Order!</SC.Button>
        </SC.TotalContainer>
      </SC.Form>
    </SC.PageContainer>
  );
};

export default ShopCartOrderForm;
