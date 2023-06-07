const Navbar = () => {
    return (
        <div className="w-full h-fit p-4 mb-2 bg-slate-700 flex justify-between">
            <p>APIs Showcase</p>
            <div className="flex gap-4">
                <p className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300">
                    News
                </p>
                <p className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300">
                    Covid Tracker
                </p>
                <p className="cursor-pointer border-b-2 border-slate-700 hover:border-slate-300">
                    Quotes
                </p>
            </div>
        </div>
    );
};

export default Navbar;
