const COVIDURL = 'https://api.covidtracking.com/v2/states/ca/daily/simple.json';
const QUOTESURL = `https://api.api-ninjas.com/v1/recipe?query=italian wedding soup`;
const NEWSURL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
    import.meta.env.VITE_NEWSAPIKEY
}`;

/**
 * the functions get the data of CovidTracker Api and return array of data
 * @implements {fetch}
 * @typedef {json} response
 * @typedef {data} array
 * @returns { array } The detailed answer can be seen in its own mock
 */
async function GetCovidData() {
    const response = await fetch(COVIDURL);
    return await response.json();
}

/**
 * the functions get the data of Recipe Api and return array of data
 * @implements {fetch}
 * @typedef {json} response
 * @typedef {data} array
 * @returns { array } The detailed answer can be seen in its own mock
 */
async function GetQuotesData() {
    const response = await fetch(QUOTESURL, {
        headers: { 'X-Api-Key': import.meta.env.VITE_QUOTESAPIKEY },
    });
    const data = await response.json();
    return data;
}

/**
 * the functions get the data of each api and return array of data
 * @implements {fetch}
 * @typedef {json} response
 * @typedef {data} array
 * @returns { array } The detailed answer can be seen in its own mock
 */
async function GetNewsData() {
    const response = await fetch(NEWSURL);
    const data = await response.json();
    return data.articles;
}

export { GetCovidData, GetQuotesData, GetNewsData };
