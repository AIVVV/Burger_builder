import React from "react";
import Order from "../../components/Order/Order";
import Axios from "../../common/api/axios-orders";
import withErrorHandler from "../../common/hoc/withErrorHandler";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("/orders.json")
      .then(res => {
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }

        this.setState({ ...this.state, loading: false, orders: fetchedOrders });
      })
      .catch(() => {
        this.setState({ ...this.state, loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
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
