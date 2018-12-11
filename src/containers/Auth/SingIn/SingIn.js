import React from "react";
import { Redirect } from "react-router-dom";

import { RoutePaths } from "../../../common/ClientRoutes";
import { AuthFormConfig } from "../../../common/configs/AuthFormConfig";
import Wrapper from "../../../common/hoc/Wrapper";
import Input from "../../../components/UI/Forms/Input";
import Button from "../../../components/UI/Buttons/Button";
import Spinner from "../../../components/UI/Spinners/Spinner";

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singInForm: AuthFormConfig
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

  inputChangeHandler = (event, singInElement) => {
    let updatedSingInForm = {
      ...this.state.singInForm,
      [singInElement]: {
        ...this.state.singInForm[singInElement],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.singInForm[singInElement].validation
        ),
        touched: true
      }
    };
    this.setState({ singInForm: updatedSingInForm });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSingIn(
      this.state.singInForm.email.value,
      this.state.singInForm.password.value
    );
  };

  render() {
    let singInFormArray = Object.keys(this.state.singInForm).map(key => {
      return {
        id: key,
        config: this.state.singInForm[key]
      };
    });

    let singIn = singInFormArray.map(formElement => {
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
      singIn = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <p className="ValidationError">{this.props.error.message}</p>
      );
    }

    let isAuthRedirect = null;

    if (this.props.isAuthenticated) {
      if (this.props.building) {
        isAuthRedirect = <Redirect to={RoutePaths.TO_CHECKOUT()} />;
      } else {
        isAuthRedirect = <Redirect to={RoutePaths.TO_HOME()} />;
      }
    }

    return (
      <Wrapper class="Singin">
        <h4> Sing In </h4>
        {isAuthRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {singIn}
          <Button btnType="Success">Submit</Button>
        </form>
      </Wrapper>
    );
  }
}

export default SingIn;
