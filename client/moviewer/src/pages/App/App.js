import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/index.js";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";

import useUser from "../../hooks/UseUser";
import React from "react";

function App() {
  const { refreshAuth } = useUser();

  React.useEffect(() => {
    refreshAuth();
  });
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:tt_url" element={<DetailsPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />

        {/* <Route exact path="/blogpost/detail/:id" element={<DetailPage />} />
        <Route exact path="/profile/:userID" element={<Profile />} />
        <Route exact path="/profile/:userID/edit" element={<ProfileEdit />} />
        <Route exact path="/profile/:userID/blogs" element={<UserBlogs />} />
        <Route exact path="/blog/new" element={<CreateBlogPage />} />
        <Route exact path="/blog/edit/:blogID" element={<EditBlogPage />} />
        <Route exact path="/upload" element={<ImageUpload />} />
        <Route exact path="/user" element={<UserBlogs />} /> */}
        {/* <Route
          exact
          path="/protected"
          element={<ProtectedRoute><ProtectedPage /> </ProtectedRoute>}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
