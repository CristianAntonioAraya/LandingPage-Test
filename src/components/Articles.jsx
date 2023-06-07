// import data from '../api/mocks/NewsResponse.json';  <-- mock data

import { useEffect, useState } from 'react';
import { GetNewsData } from '../api/Connections.js';

/**
 *  Component to return list of articles articles
 *  @component
 *  @return {jsx} Cards of articles
 */
const Articles = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const res = await GetNewsData();
            setData(res);
        };
        getData();
    }, []);

    console.log(data);

    if (!data) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-center p-6 bold text-4xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="w-full columns-[18rem]">
            {data &&
                data.map((item) => (
                    <div
                        className="bg-slate-700 w-auto h-fit rounded p-4 mb-6 md:mb-2"
                        key={item.publishedAt}
                    >
                        <strong className="text-lg text-center pb-2">
                            {item.title}
                        </strong>
                        <img className="my-6" src={item.urlToImage} />
                        <p>{item.content}</p>
                        <p className="mt-2 cursor-pointer text-indigo-400">
                            Click to see more...
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default Articles;
