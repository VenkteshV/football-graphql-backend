import express from 'express';
import { Schema } from '../graphql/index.js';
import bodyParser from 'body-parser';
import GraphHTTP from 'express-graphql';
import authMiddleware from '../helpers/authMiddleware.js';
const router = express.Router(); // eslint-disable-line new-cap
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
/** GET /health - Check service health */
router.get('/health', (req, res) =>
  res.send('GYAN-GraphQL - OK')
);

router.post('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema
}));

router.post('/footballers', authMiddleware, bodyParser.json(), graphqlExpress({
  schema: Schema
}));
router.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

export default router;
