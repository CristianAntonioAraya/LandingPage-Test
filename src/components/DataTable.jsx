// import  data  from '../api/mocks/CovidResponse.json';  <-- mock data

import { useEffect, useState } from 'react';
import { GetCovidData } from '../api/Connections.js';

/**
 * Componente que obtiene informacion de api y se muestra en forma de tabla
 * @returns {jsx} table
 */
const DataTable = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const res = await GetCovidData();
            setData(res.data);
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
        <table className="w-full table-auto stripe ">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Total Cases</th>
                    <th className="hidden md:block">PCR positives</th>
                    <th>Confirmed Cases</th>
                    <th>Death Cases</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {data &&
                    data.map((item, index) => (
                        <tr
                            className="border-b-2 border-indigo-500"
                            key={index}
                        >
                            <td className="p-4">{item.date}</td>
                            <td>{item.cases.confirmed}</td>
                            <td className="hidden md:block">
                                {item.tests.pcr.total}
                            </td>
                            <td>{item.cases.total}</td>
                            <td>{item.outcomes.death.total}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default DataTable;
