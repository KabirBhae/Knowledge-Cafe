import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
	return (
		<>
			<div className="md:w-1/3 text-3xl bg-gray-400 ml-4 pt-2 px-2 rounded-xl text-center">
				<h3>Bookmarked Blogs :{bookmarks.length}</h3>
				{bookmarks.map(bookmarkItem => (
					<Bookmark bookmark={bookmarkItem}></Bookmark>
				))}
			</div>
		</>
	);
};
Bookmarks.propTypes = {
	bookmarks: PropTypes.array
};
export default Bookmarks;
