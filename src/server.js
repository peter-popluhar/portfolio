import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { NODE_ENV, PORT } = process.env;
// const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// const PORT = 4000;

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
