import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { breakpoint, COLORS, SHADOW } from "../../theme";
import Button from "../atoms/Button";
import TextInput from "../molecules/TextInput";
import DropDownInput from "../molecules/DropDownInput";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import TextArea from "../molecules/TextArea";
import { FaArrowRight } from "react-icons/fa";
import { SubTitle } from "../atoms/SubTitle";
import { Title } from "../atoms/Title";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "../../constants";
import Icon from "../molecules/Icon";
import { Body } from "../atoms/Body";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Container = styled.div`
  background-color: ${COLORS.primary3};
  padding: 5rem 0;
`;
const FormContainer = styled.div`
  width: 70%;
  background-color: white;
  margin: auto;
  padding: 2rem 4rem;
  border-radius: 8px;
  box-shadow: ${SHADOW.normal};

  @media (max-width: 767px) {
    width: 90%;
    padding: 1rem;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  min-width: 25vw;
  flex: 1 1;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const IconsContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTextArea = styled(TextArea)`
  margin: 2rem 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

interface Props {
  style?: object;
}

export default function ContactFormHome({ style }: Props) {
  const [isSent, setIsSent] = useState(false);
  const ref = useRef(null);
  const { width } = useWindowDimensions();
  const initialValues = {
    name: "",
    email: "",
    website: "",
    adSpend: "",
    description: "",
  };

  const inView = useInView(ref, { once: true });

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name").min(4).max(20),
    email: Yup.string().email().required("Please enter your email"),
    website: Yup.string()
      .matches(
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        "Enter a valid url!"
      )
      .required("Please enter your website"),
    adSpend: Yup.string(),
    description: Yup.string(),
  });

  if (isSent) {
    return <SubTitle>thanks for your submission!</SubTitle>;
  }

  const animateIcon = {
    hidden: { y: 50, opacity: 0 },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.08, stiffness: 50, damping: 20 },
    }),
  };

  return (
    <Container>
      <FormContainer ref={ref}>
        <IconsContainer>
          {SERVICES.map(({ icon }, i) => {
            return (
              <motion.div
                custom={i}
                variants={animateIcon}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <Icon
                  name={icon.name}
                  color={icon.color}
                  bgColor={icon.bgColor}
                  size={32}
                  style={{ margin: "1rem" }}
                />
              </motion.div>
            );
          })}
        </IconsContainer>
        <Title
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
          as={motion.h2}
        >
          Ready to bolster your brand?
        </Title>
        <SubTitle
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "3rem",
            color: COLORS.secondaryText,
          }}
        >
          Simply fill out this form and we'll be in touch!
        </SubTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            try {
              fetch("/?no-cache=1", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
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
              <FormRow>
                <TextInput
                  label="Name"
                  placeholder="John Doe"
                  name="name"
                  error={errors.name && touched.name ? errors.name : null}
                  value={values.name}
                  handleChange={handleChange}
                  margin
                />
                <TextInput
                  label="Email"
                  placeholder="you@website.com"
                  name="email"
                  error={errors.email && touched.email ? errors.email : null}
                  value={values.email}
                  handleChange={handleChange}
                  margin
                />
              </FormRow>
              <FormRow>
                <TextInput
                  label="Website"
                  name="website"
                  placeholder="www.yourcompany.com"
                  error={
                    errors.website && touched.website ? errors.website : null
                  }
                  value={values.website}
                  handleChange={handleChange}
                  margin
                />
                <DropDownInput
                  handleChange={handleChange}
                  name="adSpend"
                  label="Monthly Ad Spend"
                  margin
                >
                  <option hidden disabled selected>
                    – select an option –
                  </option>
                  <option>Less Than $2,000</option>
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>Greater Than $20,000</option>
                </DropDownInput>
              </FormRow>
              <StyledTextArea
                label="Tell us about your business"
                name="description"
                placeholder="description"
                handleChange={handleChange}
                value={values.description}
                width={"50%"}
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
              <Body
                style={{
                  color: COLORS.secondaryText,
                  fontSize: "0.8rem",
                  marginTop: "4px",
                }}
              >
                We won't share your info with anyone else.
              </Body>
            </StyledForm>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
}
