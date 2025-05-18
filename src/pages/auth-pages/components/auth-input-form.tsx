import { Lock, User } from "lucide-react";
import { AuthFormType } from "../../../globals/enums/auth.enum";
import InputField from "../../../components/global-components/input-field-component/input-field-component";
import Row from "../../../components/layout-components/row-component/row-component";
import type { UseFormRegisterReturn } from "react-hook-form";
import "./auth-input-form.scss";

interface AuthInputFormProps {
  formType: AuthFormType;
  register: UseFormRegisterReturn;
}

const AuthInputForm = ({ formType, register }: AuthInputFormProps) => {
  const isUsername = formType === AuthFormType.USERNAME;
  const Icon = isUsername ? User : Lock;

  return (
    <Row>
      <div className="input-wrapper">
        <InputField
          type={isUsername ? "text" : "password"}
          placeholder={formType}
          autoComplete={isUsername ? "username" : "current-password"}
          className="input-field"
          {...register}
        />
        <div className="suffix-icon">
          <Icon size={20} />
        </div>
      </div>
    </Row>
  );
};

export default AuthInputForm;
