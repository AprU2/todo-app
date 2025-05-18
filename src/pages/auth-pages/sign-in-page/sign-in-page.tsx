import { AuthFormType } from "../../../globals/enums/auth.enum";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../../schemas/user-schema";
import Column from "../../../components/layout-components/column-component/column-component";
import Container from "../../../components/layout-components/container-component/container-component";
import BaseText from "../../../components/global-components/text-component/text-component";
import PrimaryButton from "../../../components/button-components/primary-button-component";
import Row from "../../../components/layout-components/row-component/row-component";
import { Link } from "react-router-dom";
import AuthInputForm from "../components/auth-input-form";
import "./sign-in-page.scss";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const authLogin = async (data: { userName: string; password: string }) => {
    console.log(data);
  };

  return (
    <Column justifyContent="center" alignItems="center" className="full-height">
      <Container className="login-card">
        <BaseText className="as-center" size="xxl">
          Login
        </BaseText>
        <Container className="body-form">
          <form onSubmit={handleSubmit(authLogin)}>
            <AuthInputForm
              register={register("userName")}
              formType={AuthFormType.USERNAME}
            />
            {errors.userName && (
              <BaseText size="sm" className="error-text">
                {errors.userName.message}
              </BaseText>
            )}
            <AuthInputForm
              register={register("password")}
              formType={AuthFormType.PASSWORD}
            />
            {errors.password && (
              <BaseText size="sm" className="error-text">
                {errors.password.message}
              </BaseText>
            )}
            <PrimaryButton
              className="primary-button"
              type="submit"
              loading={isSubmitting}
            >
              <BaseText>Login</BaseText>
            </PrimaryButton>
          </form>
        </Container>

        <Row gap={5} className="login-footer" justifyContent="center">
          <BaseText>Don't have account? </BaseText>
          <Link className="footer-link" to="/sign-up">
            Register
          </Link>
        </Row>
      </Container>
    </Column>
  );
};

export default SignInPage;
