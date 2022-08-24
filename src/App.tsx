import Container from "components/App/Container";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/global.sass";
import "styles/common.scss";
import About from "pages/About/About";
import ProtectedRoute from "components/Navigation/ProtectedRoute";
import Login from "pages/Auth/Login";
import HomeLayout from "layouts/HomeLayout";
import PaymentsLayout from "layouts/PaymentsLayout";
import IncomesLayout from "layouts/IncomesLayout";
import CategoriesLayout from "layouts/CategoriesLayout";
import Logout from "components/Navigation/Logout";
import MainLayout from "layouts/MainLayout";

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <HomeLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="payments"
            element={
              <ProtectedRoute>
                <PaymentsLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="incomes"
            element={
              <ProtectedRoute>
                <IncomesLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute>
                <CategoriesLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="about-us"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
