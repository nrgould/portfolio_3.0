import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { breakpoint, COLORS } from "../../theme";
import Button from "../atoms/Button";
import TextInput from "../molecules/TextInput";
import DropDownInput from "../molecules/DropDownInput";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import TextArea from "../molecules/TextArea";
import { FaArrowRight } from "react-icons/fa";
import { SubTitle } from "../atoms/SubTitle";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  min-width: 25vw;
  flex: 1 1;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {
  style?: object;
}

export default function ContactForm({ style }: Props) {
  const [isSent, setIsSent] = useState(false);
  const { width } = useWindowDimensions();
  const initialValues = {
    name: "",
    email: "",
    website: "",
    adSpend: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name").min(4).max(20),
    email: Yup.string().email().required("Please enter your email"),
    website: Yup.string()
      .matches(
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        "Enter valid url!"
      )
      .required("Please enter your website"),
    adSpend: Yup.string(),
    description: Yup.string(),
  });

  if (isSent) {
    return <SubTitle>thanks for your submission!</SubTitle>;
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          try {
            fetch("/?no-cache=1", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            });
            setIsSent(true);
            resetForm();
          } catch (error) {
            setErrors(error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          isSubmitting,
          isValid,
          dirty,
          handleReset,
        }) => (
          <StyledForm
            name="contact"
            style={style}
            onReset={handleReset}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <TextInput
              label="Name"
              placeholder="John Doe"
              name="name"
              error={errors.name && touched.name ? errors.name : null}
              value={values.name}
              handleChange={handleChange}
            />
            <TextInput
              label="Email"
              placeholder="you@website.com"
              name="email"
              error={errors.email && touched.email ? errors.email : null}
              value={values.email}
              handleChange={handleChange}
            />
            <TextInput
              label="Website"
              name="website"
              placeholder="www.yourcompany.com"
              error={errors.website && touched.website ? errors.website : null}
              value={values.website}
              handleChange={handleChange}
            />

            <DropDownInput
              handleChange={handleChange}
              name="adSpend"
              label="Monthly Ad Spend"
            >
              <option hidden disabled selected>
                – select an option –
              </option>
              <option>Less Than $2,000</option>
              <option>$2,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>Greater Than $20,000</option>
            </DropDownInput>
            <TextArea
              label="Tell us about your business"
              name="description"
              placeholder="description"
              handleChange={handleChange}
              value={values.description}
            />
            <Button
              icon={
                <FaArrowRight
                  color={
                    isSubmitting || !isValid || !dirty
                      ? COLORS.secondaryText
                      : "#fff"
                  }
                  size={22}
                />
              }
              secondary
              disabled={isSubmitting || !isValid || !dirty}
              text="Submit"
              type="submit"
              style={{ width: width < breakpoint ? width / 1.3 : "15rem" }}
            />
            <body
              style={{
                color: COLORS.secondaryText,
                fontSize: "0.8rem",
                marginTop: "4px",
              }}
            >
              We won't share your info with anyone else.
            </body>
          </StyledForm>
        )}
      </Formik>
    </React.Fragment>
  );
}
