import React from 'react';
import Button from '../../components/UI/Buttons/Button';
import Spinner from '../../components/UI/Spinners/Spinner';
import Axios from '../../common/api/axios-orders';
import Input from '../../components/UI/Forms/Input/Input';
import { OrderFormConfig } from '../../common/configs/OrderFormConfig';
import withErrorHandler from '../../common/hoc/withErrorHandler';

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: OrderFormConfig,
      formIsValid: false,
    };
  }

  orderHandler = e => {
    e.preventDefault();

    const formData = {};

    for (let formIndent in this.state.orderForm) {
      formData[formIndent] = this.state.orderForm[formIndent].value;
    }

    this.setState({ ...this.state, loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderBurger(order);
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  inputChangeHandler = (event, inputIndent) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedOrderFormElement = {
      ...updatedOrderForm[inputIndent],
    };

    updatedOrderFormElement.value = event.target.value;

    updatedOrderFormElement.valid = this.checkValidity(
      updatedOrderFormElement.value,
      updatedOrderFormElement.validation,
    );

    updatedOrderFormElement.touched = true;

    updatedOrderForm[inputIndent] = updatedOrderFormElement;

    let formIsValid = true;

    for (let formIndentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[formIndentifier].valid && formIsValid;
    }

    this.setState({
      ...this.state,
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
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
        ))}

        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, Axios);
