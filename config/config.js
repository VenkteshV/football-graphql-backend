import Joi from 'joi';
//const Joi = require('joi');
// Require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// Define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['ci','dev', 'prod', 'test'])
    .default('dev'),
  PORT: Joi.number()
    .default(5000),
  GYAN_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('dev'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  GYAN_HOST: Joi.string().required()
    .description('GYAN host url'),
  GYAN_PORT: Joi.number()
    .default(1833),
  GYAN_DB: Joi.string().required()
    .description('GYAN database'),
  GYAN_USR: Joi.string().required()
    .description('GYAN username'),
  GYAN_PWD: Joi.string().required()
    .description('GYAN password'),
  AUTH_TOKEN: Joi.string().required()
  .description('Auth Token'),
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const { NODE_ENV, PORT, JWT_SECRET, GYAN_HOST, GYAN_PWD, GYAN_PORT, GYAN_DB, GYAN_USR, AUTH_TOKEN } = envVars;
const config = {
  env: NODE_ENV.trim(),
  port: PORT,
  gyan: {
    host: GYAN_HOST.trim(),
    port: GYAN_PORT,
    db: GYAN_DB.trim(),
    user: GYAN_USR.trim(),
    pwd: GYAN_PWD.trim(),
    auth: AUTH_TOKEN.trim(),
  }
};

export default config;
