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
import MyForm from "./layout/MyForm"
import reportWebVitals from "./reportWebVitals"

const basePath = process.env.PUBLIC_URL || "/"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={basePath}
      element={<App />}
    >
      <Route
        path={`${basePath}/`}
        element={<Navigate to="/" />}
      />
      <Route
        path="form"
        element={<MyForm />}
      />
      <Route
        path="extra"
        element={<h1>Extra</h1>}
      />
      <Route
        path="contact"
        element={<h1>Contact</h1>}
      />
    </Route>,
  ),
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
