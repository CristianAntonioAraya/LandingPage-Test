import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import CovidTrackerPage from './pages/CovidTrackerPage.jsx';
import RecipesPage from './pages/RecipesPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'news',
        element: <NewsPage />,
    },
    {
        path: 'CovidTracker',
        element: <CovidTrackerPage />,
    },
    {
        path: 'recipes',
        element: <RecipesPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
