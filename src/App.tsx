import { Route, Routes } from "react-router-dom";
import Header from "./page/Header";
import NewArticle from "./page/NewArticle";
import AllArticles from "./page/AllArticles";
import SingleArticle from "./page/SingleArticle";
import ProtectedRoute from "./page/ProtectedRoute"; // přidej cestu dle projektu
import { UserContextProvider } from "./page/context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthMe } from "./page/user/AuthMe";
import { selectUrl } from "./page/url/urlSlice";
import LogIn from "./page/user/LogIn";
import Shop from "./page/shop/Shop";

function App() {
  const URL = useSelector(selectUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthMe(dispatch, URL);
  }, [dispatch, URL]);

  return (
    <UserContextProvider>
      <Header />
      <Routes>
        {/* Veřejná část */}
        <Route path="/" element={<LogIn />} />

        {/* Chráněná část */}
        <Route element={<ProtectedRoute />}>
          <Route path="/article" element={<NewArticle />} />
          <Route path="/allArticles" element={<AllArticles />} />
          <Route path="/allArticles/:id" element={<SingleArticle />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
