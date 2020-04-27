import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
    slug: post.slug,
    name: post.name,
    img: post.img,
    role: post.role,
    year: post.year,
    tags: post.tags,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
