// TODO: React Router Dom 6 does not support regex paths but adds this feature later. Check every 2 weeks https://github.com/remix-run/react-router/discussions/8132

const PATHS = {
  HOME: "/",
  CREATE_TICKET: "/create",
  TICKET: "/ticket/:id",
};

export default PATHS;
