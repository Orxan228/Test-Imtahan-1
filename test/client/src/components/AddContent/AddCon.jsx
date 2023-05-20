import React from "react";
import "./AddCon.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string("Enter a Brand Name").required("First Name is required"),
  price: Yup.number("Enter a price").required("Price is required"),
});

const AddCon = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      values.name = "";
      values.price = "";
    },
  });

  return (
    <>
      <div className="addcon">
        <div className="addcon___form">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              label="Brand Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              type="number"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              label="Price"
              variant="outlined"
            />
            <Button fullWidth type="submit" variant="contained">
              Add
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCon;
