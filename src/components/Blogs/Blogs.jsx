import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmark }) => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("fakeBlogs.json")
			.then(res => res.json())
			.then(data => setBlogs(data));
	}, []);
	return (
		<div className="md:w-2/3">
			{blogs.map(blogItem => (
				<Blog key={blogItem.id} blogProp={blogItem} handleAddBookmark={handleAddBookmark}></Blog>
			))}
		</div>
	);
};
Blogs.propTypes = {
	handleAddBookmark: PropTypes.func.isRequired
};
export default Blogs;
