import { useParams, Link } from 'react-router-dom';

function CategoryDescription() {

	let {categoryName} = useParams()
	
	return (
		<>
			<h1>
				Category: {categoryName}
			</h1>
			<Link to="/cat">Назад</Link>
		</>
	);
}

export default CategoryDescription;