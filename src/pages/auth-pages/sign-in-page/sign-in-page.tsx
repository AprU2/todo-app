import { AuthFormType } from "../../../globals/enums/auth-enum";
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
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "../../../components/global-components/languages-dropdown-component/languages-dropdown-component";
import "./sign-in-page.scss";

const SignInPage = () => {
  const { t } = useTranslation();

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
    <>
      <LanguageDropdown />
      <Column
        justifyContent="center"
        alignItems="center"
        className="full-height"
      >
        <Container className="login-card">
          <BaseText className="as-center" size="xxl">
            {t("signInPage.login")}
          </BaseText>
          <Container className="body-form">
            <form onSubmit={handleSubmit(authLogin)}>
              <AuthInputForm
                register={register("userName")}
                formType={AuthFormType.USERNAME}
              />
              {errors.userName && (
                <BaseText size="sm" className="error-text">
                  {t(errors.userName.message ?? "")}
                </BaseText>
              )}
              <AuthInputForm
                register={register("password")}
                formType={AuthFormType.PASSWORD}
              />
              {errors.password && (
                <BaseText size="sm" className="error-text">
                  {t(errors.password.message ?? "")}
                </BaseText>
              )}
              <PrimaryButton
                className="primary-button"
                type="submit"
                loading={isSubmitting}
              >
                <BaseText>{t("signInPage.loginButton")}</BaseText>
              </PrimaryButton>
            </form>
          </Container>

          <Row gap={5} className="login-footer" justifyContent="center">
            <BaseText>{t("signInPage.isNoAccount")}</BaseText>
            <Link className="footer-link" to="/sign-up">
              {t("signInPage.registerButton")}
            </Link>
          </Row>
        </Container>
      </Column>
    </>
  );
};

export default SignInPage;
