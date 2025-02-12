import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
	return (
		<>
			<Header></Header>
			<div className="md:flex mt-6">
				<Blogs></Blogs>
				<Bookmarks></Bookmarks>
			</div>
		</>
	);
}

export default App;
