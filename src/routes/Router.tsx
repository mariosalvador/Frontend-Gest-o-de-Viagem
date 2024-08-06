import { createBrowserRouter } from "react-router-dom";
import { CreateTripPage } from "../pages/create-trip-page/CreateTripPage";
import { TripDetailsPage } from "../pages/trip-details-page/TripDetailsPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <CreateTripPage />,
    },
    {
        path: "/trips/:tripId",
        element: <TripDetailsPage />,
    },
]);

