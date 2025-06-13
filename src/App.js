import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
  
  const App = ()=> {
    const {fetchBlog} = useContext(AppContext);
    
    useEffect(()=>{
      fetchBlog();
    }, []);

    return (
      <div>
        <Header/>
        <Blogs/>
        <Pagination/>
      </div>
    );
  }

  export default App;
