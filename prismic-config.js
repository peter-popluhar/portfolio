import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://portfolio-now.cdn.prismic.io/api/v2'

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
	if (doc.type === 'article') return `/${doc.uid}`;
	return '/';
};

