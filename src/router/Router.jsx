import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import MainLayout from "../layout/MainLayout";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "/timeline",
                Component: Timeline
            },
            {
                path: "/stats",
                Component: Stats
            }
        ]
    },

])