import { Link } from 'react-router-dom';

function Category(props) {

	const data = props.categoryLinks
	const navItem = data.map(item => <li key={item.key}><Link to={item.link}>{item.name}</Link></li>)
	
	return (
		<>
			<h1>
				Category
			</h1>
			<nav>
				<ul>
					{navItem}
				</ul>
			</nav>
		</>
	);
}

export default Category;