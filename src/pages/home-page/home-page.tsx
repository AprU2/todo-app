import { Link } from "react-router-dom";
import BaseText from "../../components/global-components/text-component/text-component";
import Column from "../../components/layout-components/column-component/column-component";
import Row from "../../components/layout-components/row-component/row-component";
import "./home-page.scss";

interface OutlinedButtonProps {
  linkTo: string;
  children: React.ReactNode;
}

const HomePage = () => {
  const IntroSection = () => (
    <Column className="intro-section" gap={25}>
      <BaseText size="xxl">Achive More Every Day with TodoApp 👨‍💻</BaseText>

      <BaseText>
        Stay organized and boost your productivity with our Todo app.
        Effortlessly plan tasks, track progress, and accomplish your goals. Make
        every day more successful with simple, smart task management
      </BaseText>
    </Column>
  );

  const OutlinedButton = ({ linkTo, children }: OutlinedButtonProps) => (
    <Link to={linkTo}>
      <button className="outlined-button">{children}</button>
    </Link>
  );

  return (
    <Column
      alignItems="center"
      justifyContent="center"
      className="full-height"
      gap={50}
    >
      <IntroSection />

      <Row justifyContent="center" gap={8}>
        <OutlinedButton linkTo="">
          <BaseText>Sign in</BaseText>
        </OutlinedButton>

        <OutlinedButton linkTo="">
          <BaseText>Sign up</BaseText>
        </OutlinedButton>
      </Row>
    </Column>
  );
};

export default HomePage;
