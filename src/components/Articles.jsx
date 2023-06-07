const Articles = ({ articles }) => {
    /**
     *  Component to return list of articles articles
     *
     *  @component
     *  @param array articles Array of articles
     *  @return (<p>articletitle<p/>)
     *
     */

    return (
        <div className="w-full columns-[18rem]">
            {articles.map((item) => (
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
