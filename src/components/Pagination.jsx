import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = ()=> {
    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return (
        <div className="w-full flex justify-center border-2 p-2">
            <div className="w-5/12 flex justify-between items-center">
                <div className="flex gap-x-4">
                    <div>
                        {
                            page > 1 && 
                            <button onClick={()=>handlePageChange(page-1)} className="border-2 p-1">Previous</button>
                        }
                    </div>

                    <div>
                        {
                            page < totalPages && 
                            <button onClick={()=>handlePageChange(page+1)} className="border-2 p-1">Next</button>
                        }
                    </div>
                </div>

                <div className="font-semibold">
                    <p>Page {page} of {totalPages}</p>
                </div>
            </div>
        </div>
    )
}

export default Pagination;