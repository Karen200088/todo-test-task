import {FC, lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {RoutesEnum} from "../shared/config/types";
import {Loading} from "../shared/ui";

import MainLayout from "./layouts/MainLayout";

const TasksPage = lazy(() => import("../pages/TasksPage"));
const TrashPage = lazy(() => import("../pages/TrashPage"));

const appRouter = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: RoutesEnum.HOME,
        element: <TasksPage />,
      },
      {
        path: RoutesEnum.TRASH,
        element: <TrashPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  }
]);

const Router: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={appRouter}/>
    </Suspense>
  );
};

export default Router;
