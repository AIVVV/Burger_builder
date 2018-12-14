import React from "react";
import Order from "../../components/Order/Order";
import Axios from "../../common/api/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, Axios);
