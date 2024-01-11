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
    PORT: process.env.PORT,
  },
};

const NODE_ENV = process.env.NODE_ENV;

export const envConfig = (() => {
  switch (NODE_ENV) {
    case "test":
      return testEnvConfig;
    case "development":
      return developmentEnvConfig;
    case "production":
      return productionConfig;
    default:
      return developmentEnvConfig;
  }
})();
