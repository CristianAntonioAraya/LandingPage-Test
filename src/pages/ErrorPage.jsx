import { useRouteError } from 'react-router-dom';


/**
 * Error Page
 * @returns Error message
 */
const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="text-slate-100 w-screen h-screen flex justify-center items-center flex-col">
            <h1 className="text-xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred. ❌</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
