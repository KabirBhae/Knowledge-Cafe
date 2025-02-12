import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("fakeBlogs.json")
			.then(res => res.json())
			.then(data => setBlogs(data));
	}, []);
	return (
		<div className="md:w-2/3">
			{blogs.map(blogItem => (
				<Blog key={blogItem.id} blogProp={blogItem}></Blog>
			))}
		</div>
	);
};
export default Blogs;
