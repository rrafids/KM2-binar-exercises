import { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const nameField = useRef("");
  const emailField = useRef("");
  const roleField = useRef("");
  const passwordField = useRef("");
  const [pictureField, setPictureField] = useState();

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onRegister = async (e) => {
    e.preventDefault();

    try {
      const userToRegisterPayload = new FormData();

      userToRegisterPayload.append("name", nameField.current.value);
      userToRegisterPayload.append("email", emailField.current.value);
      userToRegisterPayload.append("role", roleField.current.value);
      userToRegisterPayload.append("password", passwordField.current.value);
      userToRegisterPayload.append("picture", pictureField);

      const registerRequest = await axios.post(
        "http://localhost:2000/auth/register",
        userToRegisterPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const registerResponse = registerRequest.data;

      if (registerResponse.status) navigate("/login");
    } catch (err) {
      console.log(err);
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <Container className="my-5">
      <h1 className="mb-3">Registrasi</h1>
      <Form onSubmit={onRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select ref={roleField}>
            <option>Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            ref={nameField}
            placeholder="Masukkan nama"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            ref={emailField}
            placeholder="Masukkan Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordField}
            placeholder="Masukkan Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setPictureField(e.target.files[0])}
          />
        </Form.Group>
        <p>
          Sudah punya akun? Silakan <Link to="/login">Login</Link>
        </p>
        {errorResponse.isError && (
          <Alert variant="danger">{errorResponse.message}</Alert>
        )}
        <Button className="w-100" type="submit">
          Daftar
        </Button>
      </Form>
    </Container>
  );
}
