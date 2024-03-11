import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - example page
const ExamCreate = Loadable(lazy(() => import("pages/example/Create")));
const ExamList = Loadable(lazy(() => import("pages/example/List")));
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));

// render - utilities
const Typography = Loadable(
  lazy(() => import("pages/components-overview/Typography"))
);
const Color = Loadable(lazy(() => import("pages/components-overview/Color")));
const Shadow = Loadable(lazy(() => import("pages/components-overview/Shadow")));
const AntIcons = Loadable(
  lazy(() => import("pages/components-overview/AntIcons"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "create",
      element: <ExamCreate />,
    },
    {
      path: "list",
      element: <ExamList />,
    },
    {
      path: "update",
      element: <SamplePage />,
    },
    {
      path: "dialog",
      element: <SamplePage />,
    },
    {
      path: "typo",
      element: <Typography />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "icons/ant",
      element: <AntIcons />,
    },
    // {
    //   path: "/",
    //   element: <DashboardDefault />,
    // },
    // {
    //   path: 'dashboard',
    //   children: [
    //     {
    //       path: 'default',
    //       element: <DashboardDefault />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
  ],
};

export default MainRoutes;
