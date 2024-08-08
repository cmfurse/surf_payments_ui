import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {PrimeReactProvider} from "primereact/api";

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PrimeReactProvider>
          <RouterProvider router={router} />
      </PrimeReactProvider>
  </React.StrictMode>,
)
