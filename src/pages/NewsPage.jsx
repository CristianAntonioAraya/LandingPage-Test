import Articles from '../components/articles.jsx';
import data from '../api/mocks/NewsResponse.json';
import Navbar from '../components/Navbar.jsx';

const NewsPage = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <h3 className="text-center p-6 bold text-2xl">
                This info was provided by News Api
            </h3>
            <Articles articles={data.articles} />
        </div>
    );
};

export default NewsPage;
