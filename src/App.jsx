import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
	const [bookmarks, setBookmarks] = useState([]);

	const handleAddBookmark = newBookmark => {
		let isDuplicate = false;
		bookmarks.forEach(item => {
			if (item.id === newBookmark.id) {
				isDuplicate = true;
				return;
			}
		});
		if (!isDuplicate) setBookmarks([...bookmarks, newBookmark]);
	};

	return (
		<div className="max-w-7xl mx-auto">
			<Header></Header>
			<div className="md:flex mt-6">
				<Blogs handleAddBookmark={handleAddBookmark}></Blogs>
				<Bookmarks bookmarks={bookmarks}></Bookmarks>
			</div>
		</div>
	);
}

export default App;
