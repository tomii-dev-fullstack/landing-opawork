const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/auth/signin", "/authentication"],
    exact: true,
    component: "SignIn",
  },
  {
    path: ["/auth/signup", "/authentication"],
    exact: true,
    component: "SignUp",
  },
];

export default routes;
