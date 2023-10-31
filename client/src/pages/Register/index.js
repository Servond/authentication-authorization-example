import { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [fieldImage, setFieldImage] = useState(null);
  const navigate = useNavigate();

  const register = async (email, username, password) => {
    try {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("avatar", fieldImage);

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        formData
      );
      alert(data?.message);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      image: null,
    },
    onSubmit: (values) => {
      register(values.email, values.username, values.password);
    },
  });

  return (
    <Box w="full" p={8}>
      <Heading>Register</Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel>Profile Picture: </FormLabel>
        <FormControl mb={5}>
          <InputGroup>
            <Input
              type="file"
              name="image"
              size="lg"
              onChange={(event) => {
                setFieldImage(event.currentTarget.files[0]);
              }}
            />
          </InputGroup>
        </FormControl>
        <FormLabel>Email: </FormLabel>
        <FormControl
          isInvalid={formik.touched.email && formik.errors.email}
          mb={5}
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.email && formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Username: </FormLabel>
        <FormControl
          isInvalid={formik.touched.username && formik.errors.username}
          mb={5}
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="username"
              placeholder="Your username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.username && formik.errors.username && (
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Password: </FormLabel>
        <FormControl
          isInvalid={formik.touched.password && formik.errors.password}
          mb={5}
        >
          <InputGroup>
            <Input
              size="lg"
              type="password"
              name="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit">Register</Button>
      </form>
    </Box>
  );
}

export default Register;
