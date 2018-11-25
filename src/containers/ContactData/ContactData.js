import React from "react";
import Button from "../../components/UI/Button";
import Spinner from "../../components/UI/Spinner";
import Axios from "../../axios-orders";
import { RoutePaths } from "../../common/ClientRoutes";

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      name: "",
      email: "",
      address: {
        street: "",
        postCode: ""
      },
      loading: false
    };
  }

  orderHandler = e => {
    e.preventDefault();

    this.setState({ ...this.state, loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: "Test Test",
        address: {
          city: "Sofia",
          country: "Bulgaria",
          street: "test street"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    Axios.post("orders.json", order)
      .then(() => {
        this.setState({ ...this.state, loading: false });
        this.props.history.push(RoutePaths.TO_HOME());
      })
      .catch(() => {
        this.setState({ ...this.state, loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="Input"
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal code"
        />
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
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

export default ContactData;
