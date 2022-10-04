import DashboardContainer from "../../containers/material-ui/DashboardContainer";
import DataDisplay from "../../containers/material-ui/example/components/DataDisplay";
import Feedback from "../../containers/material-ui/example/components/Feedback";
import Inputs from "../../containers/material-ui/example/components/Inputs";
import Layout from "../../containers/material-ui/example/components/Layout";
import Navigation from "../../containers/material-ui/example/components/Navigation";
import Surfaces from "../../containers/material-ui/example/components/Surfaces";
import MainContainer from "../../containers/material-ui/MainContainer";

const muiRoutes = [
    {
        path: '/mui',
        element: <MainContainer/>,
    },
    {
        path: '/mui/example/components/inputs',
        element: <Inputs/>,
    },
    {
        path: '/mui/example/components/data-display',
        element: <DataDisplay/>,
    },
    {
        path: '/mui/example/components/feedback',
        element: <Feedback/>,
    },
    {
        path: '/mui/example/components/surfaces',
        element: <Surfaces/>,
    },
    {
        path: '/mui/example/components/navigation',
        element: <Navigation/>,
    },
    {
        path: '/mui/example/components/layout',
        element: <Layout/>,
    },
    {
        path: '/mui/dashboard',
        element: <DashboardContainer/>,
    },
]

export default muiRoutes;