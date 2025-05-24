import { useTranslation } from "react-i18next";
import BaseText from "../components/global-components/text-component/text-component";
import Column from "../components/layout-components/column-component/column-component";
import HeaderLogo from "../components/global-components/header-logo-component/header-logo";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Column justifyContent="center" alignItems="center" className="full-height">
      <BaseText size="xl">{t("alert.somethingWentWrong")}</BaseText>
      <HeaderLogo />
    </Column>
  );
};

export default ErrorPage;
