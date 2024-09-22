import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
import App from "./App"
import Info from "./components/Info"
import MyForm from "./layout/MyForm"
import reportWebVitals from "./reportWebVitals"

const basePath = process.env.PUBLIC_URL || "/"

let nimi: string = "Taiki-Viia Tungal"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="login"
        element={<MyForm />}
      />
      <Route
        path="form"
        element={<Info nimi={nimi} />}
      />
    </Route>,
  ),
  {
    basename: basePath,
  },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

reportWebVitals()
