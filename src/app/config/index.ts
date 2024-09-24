import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt: process.env.BCRYPT_SALT,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  ssl: {
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD,
    success_url: process.env.SUCCESS_URL,
    fail_rul: process.env.FAIL_URL,
    cancel_url: process.env.CANCEL_URL,
    ssl_payment_api: process.env.SSL_PAYMENT_API,
  },
};
