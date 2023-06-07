import data from '../api/mocks/OkResponse.json';
import Navbar from '../components/Navbar.jsx';
import Articles from '../components/articles.jsx';

const Main = () => {
    return (
        <div className="container mx-auto text-slate-100">
            <Navbar />
            <Articles articles={data.articles} />
        </div>
    );
};

export default Main;
