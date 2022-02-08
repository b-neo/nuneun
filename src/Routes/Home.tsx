import { useLocation } from "react-router-dom";

function Home() {
	const { search } = useLocation();
	return <div>{search} home</div>;
}

export default Home;
