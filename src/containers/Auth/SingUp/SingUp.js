import React from "react";
import { Redirect } from "react-router-dom";

import { AuthFormConfig } from "../../../common/configs/AuthFormConfig";
import Wrapper from "../../../common/hoc/Wrapper";
import Input from "../../../components/UI/Forms/Input";
import Button from "../../../components/UI/Buttons/Button";
import Spinner from "../../../components/UI/Spinners/Spinner";
import { RoutePaths } from "../../../common/ClientRoutes";
import { checkValidity } from "../../../common/Utility";

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singUpForm: AuthFormConfig
    };
  }

  inputChangeHandler = (event, singUpElement) => {
    let updatedSingUpForm = {
      ...this.state.singUpForm,
      [singUpElement]: {
        ...this.state.singUpForm[singUpElement],
        value: event.target.value,
        valid: checkValidity(
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

    let isSingUpRedirect = null;

    if (this.props.token !== null && this.props.token) {
      isSingUpRedirect = <Redirect to={RoutePaths.TO_SING_IN()} />;
    }

    return (
      <Wrapper class="Singup">
        <h4> Sing Up </h4>
        {errorMessage}
        {isSingUpRedirect}
        <form onSubmit={this.submitHandler}>
          {singUp}
          <Button btnType="Success">Submit</Button>
        </form>
      </Wrapper>
    );
  }
}

export default SingUp;
