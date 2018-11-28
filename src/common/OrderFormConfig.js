export const OrderFormConfig = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name"
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Street"
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "ZIP Code"
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Country"
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your E-Mail"
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  },
  deliveryMethod: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "fastest", displayValue: "Fastest" },
        { value: "cheapest", displayValue: "Cheapest" }
      ]
    },
    value: "",
    validation: {
      required: true
    },
    valid: false
  }
};