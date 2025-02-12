import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blogProp, handleAddBookmark, handleMarkAsRead }) => {
	const { cover_image, title, author_name, author_img, posted_date, reading_time, hashtags } = blogProp;

	return (
		<div className="mb-10">
			<img className="w-full rounded-xl" src={cover_image} alt={`cover picture of ${title}`} />
			<div className="flex justify-between items-center mt-8">
				<div className="flex items-center">
					<img className="w-15 h-15 rounded-2xl object-cover" src={author_img} alt="Author's picture" />
					<div className="ml-6">
						<h4>{author_name}</h4>
						<h5>{posted_date}</h5>
					</div>
				</div>
				<div className="flex justify-between">
					<h4>{reading_time} min read</h4>
					<button className="text-xl ml-2 pt-1">
						<CiBookmark onClick={() => handleAddBookmark(blogProp)}></CiBookmark>
					</button>
				</div>
			</div>
			<h2 className="text-4xl mt-4">{title}</h2>
			<p className="mt-4">
				{hashtags.map((tagItem, idx) => (
					<a key={idx} className="mr-2">
						{tagItem}
					</a>
				))}
			</p>
			<button onClick={() => handleMarkAsRead(reading_time)} className="text-purple-900 underline font-bold">
				Mark as read
			</button>
		</div>
	);
};

Blog.propTypes = {
	blogProp: PropTypes.object.isRequired,
	handleAddBookmark: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
