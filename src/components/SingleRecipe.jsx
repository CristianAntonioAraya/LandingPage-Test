// import Data from '../components/RecipeResponse.jsx'; <-- mock data

import { useEffect, useState } from 'react';
import { GetQuotesData } from '../api/Connections.js';

/**
 *  Component that returns array of recipes
 *  @component
 *  @return {jsx} List of recipes
 */
const SingleRecipe = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await GetQuotesData();
            setData(res);
        };
        getData();
    }, []);

    if (!data) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-center p-6 bold text-4xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="w-full font-bold p-3">
            {data &&
                data.map((item, index) => (
                    <div key={index} className="w-full">
                        <h1 className="text-xl mb-2">{item.title}</h1>
                        <div className="mb-2">
                            <p>Instruction:</p>
                            <p className="text-slate-400">
                                {item.instructions}
                            </p>
                        </div>
                        <div className="mb-2">
                            <p>Serving:</p>
                            <p className="text-slate-400">{item.servings}</p>
                        </div>
                        <div className="mb-2">
                            <p>Ingredients:</p>
                            <p className="text-slate-400">{item.ingredients}</p>
                        </div>
                        <hr />
                    </div>
                ))}
        </div>
    );
};

export default SingleRecipe;
