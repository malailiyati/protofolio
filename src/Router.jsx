import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./component/Header";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RouteLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function RouteLayout() {
  return (
    <>
      <Header />
      <App />
    </>
  );
}

export default Router;
