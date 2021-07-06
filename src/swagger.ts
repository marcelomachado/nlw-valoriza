import swaggerAutogen from 'swagger-autogen';

import {default as config}  from "../setup.json"; 

const doc = {
	info: {
	  title: 'My API',
	  description: 'Description',
	},
	host: `${config.server}:${config.port}`,
	schemes: ['http'],
  };

  const outputFile = '../swagger-output.json';
  const endpointsFiles = ['./routes.ts'];

  swaggerAutogen(outputFile, endpointsFiles, doc);