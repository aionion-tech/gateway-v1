import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { envConfig } from "../config";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const router = Router();

router.use(
  "/auth",
  createProxyMiddleware({
    target: envConfig.SERVICES.AUTH_SERVICE_URL,
    changeOrigin: true,
  })
);

router.use(
  "/workspace",
  verifyToken,
  createProxyMiddleware({
    target: envConfig.SERVICES.WORKSPACE_SERVICE_URL,
    changeOrigin: true,
  })
);

export default router;
