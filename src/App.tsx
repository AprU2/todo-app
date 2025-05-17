import { useEffect } from "react";
import Column from "./components/layout-components/column-component/column-component";
import BaseText from "./components/global-components/text-component/text-component";
import Container from "./components/layout-components/container-component/container-component";
import InputField from "./components/global-components/input-field-component/input-field-component";
import PrimaryButton from "./components/button-components/primary-button-component";
import "./global.scss";

function App() {
  useEffect(() => {
    function setVhVariable() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setVhVariable();
    window.addEventListener("resize", setVhVariable);

    return () => window.removeEventListener("resize", setVhVariable);
  }, []);

  return (
    <Column alignItems="center" justifyContent="center" className="full-height">
      <Container
        style={{
          backgroundColor: "#202020",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <BaseText size="lg" weight="bold">
          Hi!
        </BaseText>
        <InputField className="mt-10" placeholder="password" type="password" />

        <PrimaryButton>
          <BaseText>Login</BaseText>
        </PrimaryButton>
      </Container>
    </Column>
  );
}

export default App;
