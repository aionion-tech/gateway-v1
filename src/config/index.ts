const testEnvConfig = {
  SERVICES: {
    AUTH_SERVICE_URL: "http://localhost:3000",
  },
  SERVER: {
    PORT: process.env.PORT || 3001,
  },
};

const developmentEnvConfig = {
  SERVICES: {
    AUTH_SERVICE_URL: "http://localhost:3000",
  },
  SERVER: {
    PORT: process.env.PORT || 3001,
  },
};

const productionConfig = {
  SERVICES: {
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  },
  SERVER: {
    PORT: process.env.PORT || 3000,
  },
};

const NODE_ENV = process.env.NODE_ENV;

export const envConfig = (() => {
  switch (NODE_ENV) {
    case "test":
      console.warn("test env");
      return testEnvConfig;
    case "development":
      console.warn("dev env");
      return developmentEnvConfig;
    case "production":
      console.log(JSON.stringify(productionConfig));
      console.warn("prod env");
      return productionConfig;
    default:
      console.warn("default env");
      return developmentEnvConfig;
  }
})();
