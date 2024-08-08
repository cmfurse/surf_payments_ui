import App from "./App.tsx";
import {createBrowserRouter} from "react-router-dom";
import UserList from "./features/user/UserList.tsx";
import UserForm from "./features/user/UserForm.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: 'users', element: <UserList />},
            {path: 'users/:id', element: <UserForm />},
        ]
    },
]);
