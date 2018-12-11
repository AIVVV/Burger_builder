import React from "react";
import { AuthFormConfig } from "../../../common/configs/AuthFormConfig";
import Wrapper from "../../../common/hoc/Wrapper";
import Input from "../../../components/UI/Forms/Input";
import Button from "../../../components/UI/Buttons/Button";
import Spinner from "../../../components/UI/Spinners/Spinner";

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singUpForm: AuthFormConfig
    };
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  inputChangeHandler = (event, singUpElement) => {
    let updatedSingUpForm = {
      ...this.state.singUpForm,
      [singUpElement]: {
        ...this.state.singUpForm[singUpElement],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.singUpForm[singUpElement].validation
        ),
        touched: true
      }
    };
    this.setState({ singUpForm: updatedSingUpForm });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSingUp(
      this.state.singUpForm.email.value,
      this.state.singUpForm.password.value
    );
  };

  render() {
    let singUpFormArray = Object.keys(this.state.singUpForm).map(key => {
      return {
        id: key,
        config: this.state.singUpForm[key]
      };
    });

    let singUp = singUpFormArray.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          valueName={formElement.id}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => this.inputChangeHandler(event, formElement.id)}
        />
      );
    });

    if (this.props.loading) {
      singUp = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <p className="ValidationError">{this.props.error.message}</p>
      );
    }

    return (
      <Wrapper class="Singup">
        <h4> Sing Up </h4>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {singUp}
          <Button btnType="Success">Submit</Button>
        </form>
      </Wrapper>
    );
  }
}

export default SingUp;
