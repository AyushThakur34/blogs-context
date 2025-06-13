import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = ()=> {
    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return (
        <div>
            <div>
                <div>
                    {
                        page > 1 && 
                        <button onClick={()=>handlePageChange(page-1)}>Previous</button>
                    }
                </div>

                <div>
                    {
                        page < totalPages && 
                        <button onClick={()=>handlePageChange(page+1)}>Next</button>
                    }
                </div>
            </div>

            <div>
                <p>Page {page} of {totalPages}</p>
            </div>
        </div>
    )
}

export default Pagination;