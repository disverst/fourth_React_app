import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error404 from './Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

	const headerLinks = [
		{'name': 'Главная', 'link': '/', 'key': 1},
		{'name': 'О сайте', 'link': '/about', 'key': 2},
		{'name': 'Категории', 'link': '/cat', 'key': 3},
	];
	const categoryLinks = [
		{'name': 'Ноутбуки', 'link': '/cat/notebook', 'key': 1},
		{'name': 'Мониторы', 'link': '/cat/monitor', 'key': 2},
		{'name': 'Мобильные телефоны', 'link': '/cat/cellphone', 'key': 3},
	];

	return (
		<>
			<Router>
				<Header headerLinks={headerLinks} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/cat">
						<Category categoryLinks={categoryLinks} />
					</Route>
					<Route path="/cat/:categoryName" component={CategoryDescription} />
					<Route component={Error404} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default App;
