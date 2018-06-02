import { makeExecutableSchema } from 'graphql-tools';
import football from './queries';
import {typeDefs} from './types';

const Schema = makeExecutableSchema({ typeDefs, resolvers: football });
export { Schema };
