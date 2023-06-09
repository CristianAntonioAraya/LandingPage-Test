import DataTable from '../components/DataTable.jsx';
import Navbar from '../components/Navbar.jsx';

const CovidTrackerPage = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <h3 className="text-center p-6 bold text-2xl">
                This info was provided by Covid Tracker Api
            </h3>
            <DataTable />
        </div>
    );
};

export default CovidTrackerPage;
