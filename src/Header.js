import { Link } from 'react-router-dom';

function Header(props) {
	
	const data = props.headerLinks
	const navItem = data.map(item => <li key={item.key}><Link to={item.link}>{item.name}</Link></li>)

	return (
		<>
			<nav>
				<ul>
					{navItem}
				</ul>
			</nav>
		</>
	);
}

export default Header;