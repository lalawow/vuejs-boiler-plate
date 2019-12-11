const route = {
  path: "/home",
  component: () =>
    import ("@/views/home"),
  name: "home",
  meta: {
    topMenu: true,
    title: "首页"
  }
};

export default route;