export const StaticRoutes = Object.freeze({
  HOME: "/",
  CHECKOUT: "/checkout",
  CHECKOUT_CONTACT_DATA: '/checkout/contact-data',
  ORDERS: '/orders'
});

export const RoutePaths = Object.freeze({
  TO_HOME: () => StaticRoutes.HOME,
  TO_CHECKOUT: () => StaticRoutes.CHECKOUT,
  TO_CHECKOUT_CONTACT_DATA: () => StaticRoutes.CHECKOUT_CONTACT_DATA,
  TO_ORDERS: () => StaticRoutes.ORDERS
});
