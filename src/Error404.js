import { Link } from 'react-router-dom';

function Error404() {
	return (
		<>
			<h1>
				404
			</h1>
			<p>
				Sorry, the page you requested was not found
			</p>
			<Link to="/">Назад</Link>
		</>
	);
}

export default Error404;