export const StaticRoutes = Object.freeze({
  SING_UP: "/sing-up",
  SING_IN: "/sing-in",
  SING_OUT: "/sing-out",
  HOME: "/",
  CHECKOUT: "/checkout",
  CHECKOUT_CONTACT_DATA: '/checkout/contact-data',
  ORDERS: '/orders'
});

export const RoutePaths = Object.freeze({
  TO_SING_UP: () => StaticRoutes.SING_UP,
  TO_SING_IN: () => StaticRoutes.SING_IN,
  TO_SING_OUT: () => StaticRoutes.SING_OUT,
  TO_HOME: () => StaticRoutes.HOME,
  TO_CHECKOUT: () => StaticRoutes.CHECKOUT,
  TO_CHECKOUT_CONTACT_DATA: () => StaticRoutes.CHECKOUT_CONTACT_DATA,
  TO_ORDERS: () => StaticRoutes.ORDERS
});
