import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
	return <h3 className="text-2xl text-center bg-sky-50 p-4 m-4 rounded-xl">{bookmark.title}</h3>;
}

Bookmark.propTypes = {
	bookmark: PropTypes.object.isRequired,
};

export default Bookmark;