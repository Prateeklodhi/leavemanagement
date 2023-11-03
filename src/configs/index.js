import 'dotenv/config';

export const configs = {
  nodeEnv: process.env.NODE_ENV,
  host: process.env.HOST??"0.0.0.0",
  port: process.env.PORT??3000,
  baseDomain: {
    client: process.env.CLIENT_BASE_DOMAIN,
    server: process.env.SERVER_BASE_DOMAIN,
  },
  baseURL: {
    client: process.env.CLIENT_BASE_URL,
    server: process.env.SERVER_BASE_URL,
  },
};

// export const configs = {
//     nodeEnv:process.env.NODE_ENV,
//     host:process.env.HOST??"0.0.0.0",
//     port:Number(process.env.PORT)??3000,

//     baseDomain:{
//         client:process.env.CLIENT_BASE_DOMAIN,
//         server:process.env.SERVER_BASE_DOMAIN,
//     },
//     baseURL:{
//         client:process.env.CLIENT_BASE_URL,
//         server:process.env.SERVER_BASE_URL,
//     },
// }
