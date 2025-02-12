import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setreadingTime] = useState(0);

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

	const handleMarkAsRead = (time, id) => {
		setreadingTime(readingTime + parseInt(time));
		//remove from bookmark list
		const newBookmarks = bookmarks.filter(item => item.id !== id);
		setBookmarks(newBookmarks);
	};

	return (
		<div className="max-w-7xl mx-auto">
			<Header></Header>
			<div className="md:flex mt-6">
				<Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
				<Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
			</div>
		</div>
	);
}

export default App;
