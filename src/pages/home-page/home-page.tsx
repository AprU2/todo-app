import { Link } from "react-router-dom";
import BaseText from "../../components/global-components/text-component/text-component";
import Column from "../../components/layout-components/column-component/column-component";
import Row from "../../components/layout-components/row-component/row-component";
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "../../components/global-components/languages-dropdown-component/languages-dropdown-component";
import "./home-page.scss";

interface OutlinedButtonProps {
  linkTo: string;
  children: React.ReactNode;
}

const HomePage = () => {
  const { t } = useTranslation();

  const IntroSection = () => (
    <Column className="intro-section" gap={25}>
      <BaseText size="xxl">{t("homePage.header")}</BaseText>

      <BaseText>{t("homePage.main")}</BaseText>
    </Column>
  );

  const OutlinedButton = ({ linkTo, children }: OutlinedButtonProps) => (
    <Link to={linkTo}>
      <button className="outlined-button">{children}</button>
    </Link>
  );

  return (
    <>
      <LanguageDropdown />
      <Column
        alignItems="center"
        justifyContent="center"
        className="full-height"
        gap={50}
      >
        <IntroSection />

        <Row justifyContent="center" gap={8}>
          <OutlinedButton linkTo="/sign-in">
            <BaseText>{t("homePage.signInButton")}</BaseText>
          </OutlinedButton>

          <OutlinedButton linkTo="/sign-up">
            <BaseText>{t("homePage.signUpButton")}</BaseText>
          </OutlinedButton>
        </Row>
      </Column>
    </>
  );
};

export default HomePage;
