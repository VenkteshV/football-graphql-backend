import footballers from './definitions/footballers';
const query = `
	type Query {
		football: [footballers]
	}
`;

export const typeDefs = [footballers,query];
