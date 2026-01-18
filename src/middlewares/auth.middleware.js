import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { env } from "../config/env.js";

export const authMiddleware = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${env.auth0Domain}/.well-known/jwks.json`,
    cache: true,
    rateLimit: true
  }),
  audience: env.auth0Audience,
  issuer: `https://${env.auth0Domain}/`,
  algorithms: ["RS256"]
});
