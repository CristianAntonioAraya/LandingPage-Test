import Navbar from '../components/Navbar.jsx';
import SingleQuote from '../components/SingleRecipe.jsx';

const RecipesPage = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <h3 className="text-center p-6 bold text-2xl">
                This info was provided by Api Ninja
            </h3>
            <SingleQuote />
        </div>
    );
};

export default RecipesPage;
