import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H3, H4, Image, P } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  ForgotPassword,
  Href,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
} from "../../utils/Constant";
import { useState } from "react";
import { toast } from "react-toastify";
import SocialApp from "./SocialApp";
import axios from "axios"; // Import axios
import { useAppDispatch } from "../../ReduxToolkit/Hooks"; // Import useAppDispatch
import { loginSuccess } from "../../ReduxToolkit/Reducers/AuthSlice"; // Import loginSuccess action

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch(); // Initialize dispatch

  const SimpleLoginHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Email dan password harus diisi");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );
      console.log(response.data); // Log the response
      if (response.data.success) {
        localStorage.setItem("login", JSON.stringify(true));
        localStorage.setItem("token", response.data.token); // Store the token
        dispatch(loginSuccess(response.data)); // Dispatch loginSuccess action
        toast.success("Login berhasil");
        navigate(`${process.env.PUBLIC_URL}/dashboard/`);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat login");
    }
  };
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo text-center" to={Href}>
                  <Image
                    className="img-fluid for-light"
                    src={dynamicImage("logo/logo.png")}
                    alt="looginpage"
                  />
                  <Image
                    className="img-fluid for-dark"
                    src={dynamicImage("logo/logo_dark.png")}
                    alt="looginpage"
                  />
                </Link>
              </div>
              <div className="login-main">
                <Form
                  className="theme-form"
                  onSubmit={(e) => SimpleLoginHandle(e)}
                >
                  <H3>{SignInAccount}</H3>
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      type="email"
                      required
                      placeholder="Test@gmail.com"
                      value={email}
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="*********"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        name="password"
                      />
                      <div className="show-hide" onClick={() => setShow(!show)}>
                        <span className="show"> </span>
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0 form-sub-title">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/authentication/forget_password`}
                    >
                      {ForgotPassword}
                    </Link>
                    <div className="text-end mt-3">
                      <Btn color="primary" block className="w-100">
                        {SignIn}
                      </Btn>
                    </div>
                  </FormGroup>
                  <H4 className="text-muted mt-4 or">{SignInWith}</H4>
                  <SocialApp />
                  <P className="mt-4 mb-0 text-center">
                    {DoNotAccount}
                    <Link
                      className="ms-2"
                      to={`${process.env.PUBLIC_URL}/authentication/register_simple`}
                    >
                      {CreateAccount}
                    </Link>
                  </P>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
