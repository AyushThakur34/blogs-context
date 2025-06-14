import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { Route, Routes, useLoaderData, useLocation, useSearchParams } from "react-router-dom";
import TagPage from "./components/TagPage";
import CategoryPage from "./components/CategoryPage";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";  
import BlogPage from "./components/BlogPage";  

  const App = ()=> {
    const {fetchBlog} = useContext(AppContext);
    
    const [searchParam, setSearchParam] = useSearchParams();
    const location = useLocation();

    useEffect(()=> {
      const page = searchParam.get("page") ?? 1;
      if(location.pathname.includes("tags")) {
        const tag = location.pathname.split("/").at(-1).replace("-", " ");
        fetchBlog(page, tag);
      }
      else if(location.pathname.includes("category")) {
        const category = location.pathname.split("/").at(-1);
        fetchBlog(page, null, category);
      }
      else fetchBlog(Number(page));
    }, [location.pathname, location.search]);

    return (
      <div className="w-screen h-screen relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs/:blogId" element={<BlogPage/>}/>
            <Route path="tags/:tagId" element={<TagPage/>}/>
            <Route path="categories/:categoryId" element={<CategoryPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </div>
    );
  }

  export default App;
