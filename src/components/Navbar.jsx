import { Link } from 'react-router-dom';

/**
 * Navigation bar with links
 * @returns {jsx}
 */
const Navbar = () => {
    return (
        <div className="w-full h-fit p-4 mb-2 bg-slate-700 flex justify-between">
            <p>APIs Showcase</p>
            <div className="flex gap-4">
                <Link
                    to="/news"
                    className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300"
                >
                    News
                </Link>
                <Link
                    to="/covidTracker"
                    className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300"
                >
                    Covid Tracker
                </Link>
                <Link
                    to="/recipes"
                    className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300"
                >
                    Recipes
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
