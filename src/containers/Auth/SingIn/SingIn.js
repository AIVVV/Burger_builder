import React from "react";
import { Redirect } from "react-router-dom";

import { AuthFormConfig } from "../../../common/configs/AuthFormConfig";
import Wrapper from "../../../common/hoc/Wrapper";
import Input from "../../../components/UI/Forms/Input";
import Button from "../../../components/UI/Buttons/Button";
import Spinner from "../../../components/UI/Spinners/Spinner";
import { checkValidity } from "../../../common/Utility";

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singInForm: AuthFormConfig
    };
  }

  inputChangeHandler = (event, singInElement) => {
    let updatedSingInForm = {
      ...this.state.singInForm,
      [singInElement]: {
        ...this.state.singInForm[singInElement],
        value: event.target.value,
        valid: checkValidity(
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

  componentDidMount() {
    if (!this.props.building && this.props.authRedirectPath !== "/") {
      this.props.onAuthRedirect("/");
    }
  }

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
      isAuthRedirect = <Redirect to={this.props.authRedirectPath} />;
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
