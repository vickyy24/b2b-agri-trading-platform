import axios from "axios";
import { useEffect, useState } from "react";

const CategoryAdmin=()=>{

    const [categoryInput, setCategoryInput] = useState({
        CategoryName: "",
        IsActive: ""
    });

    const [categoryList, setCategoryList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [categoryId, setCategoryId] = useState("");
    const [categoryError, setCategoryError] = useState({});

    const [backendMessage, setBackendMessage] = useState({
        msg: "",
        type: ""
    });
    const handleCategoryInput=(e)=>{

        setCategoryInput({
            ...categoryInput,
            [e.target.name]: e.target.value
        });

        //clears input field error message while typing
        setCategoryError({
            ...categoryError,
            [e.target.name === "CategoryName" ? "categorynameError" : "isactiveError"] : ""
        });
    }

    function validateCategory(){

        let error = {};
        let isValid = true;

        if(!categoryInput.CategoryName.trim()){
            error.categorynameError = "Category Name is Required";
            isValid = false;
        }

        if(!categoryInput.IsActive){
            error.isactiveError = "Please Select Status";
            isValid = false;
        }

        setCategoryError(error);
        return isValid;

    }

    const addCategory=async(e)=>{
        e.preventDefault();

        if(validateCategory()){
            try{
                if(isUpdate){

                   const response = await axios({
                        url: `http://localhost:9000/updatecategory/${categoryId}`,
                        method: "PUT",
                        data: categoryInput
                    });

                    setBackendMessage({
                        msg: response.data.message,
                        type: "success"
                    });

                    setTimeout(()=>{
                        setBackendMessage({
                            msg: "",
                            type: ""
                        });
                    },3000);
                }
                else{

                  const result = await axios({
                        url: "http://localhost:9000/addcategory",
                        method: "POST",
                        data: categoryInput
                    });
                    setBackendMessage({
                        msg: result.data.message,
                        type: "success"
                    });
                    setTimeout(()=>{
                        setBackendMessage({
                            msg: "",
                            type: ""
                        });
                    },3000);
                }
                getCategories();

                setCategoryInput({
                    CategoryName: "",
                    IsActive: ""
                });

                setIsUpdate(false);
                setCategoryId("");
            }
            catch(error){

                setBackendMessage({
                    msg: error.response.data.message,
                    type: "error"
                });

                setTimeout(()=>{
                    setBackendMessage({
                        msg: "",
                        type: ""
                    });
                },3000);
            }
        }
    }

    const getCategories=async()=>{

        try{
            const result = await axios({
                url: "http://localhost:9000/getcategories",
                method: "GET"
            });
            setCategoryList(result.data);
        }
        catch(error){
            setBackendMessage({
                msg: error.response.data.message,
                type: "error"
            });
            setTimeout(()=>{
                setBackendMessage({
                    msg: "",
                    type: ""
                });
            },3000);
        }
    }
    function editCategory(item){
        setIsUpdate(true);
        setCategoryId(item.category_id);

        setCategoryInput({
            CategoryName: item.category_name,
            IsActive: item.isactive
        });
    }

    function cancelUpdate(){
        setCategoryInput({
            CategoryName: "",
            IsActive: ""
        });

        setIsUpdate(false);
        setCategoryId("");
    }
    useEffect(()=>{
        getCategories();
    },[]);

    return(
        <>
            {
                backendMessage.msg &&
                <div className={"fixed top-5 right-5 px-5 py-3 rounded-lg text-white font-medium shadow-lg z-50 " +
                    (backendMessage.type === "success" ? "bg-green-600" : "bg-red-600")}>
                    {backendMessage.msg}
                </div>
            }
            <div className="flex gap-6 items-start">

                <div className="w-[40%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Category Details</h2>
                    <form onSubmit={addCategory} className="space-y-5">

                        <label className="block text-sm font-medium text-gray-800 mb-2">Category Name *</label>
                        <input type="text" name="CategoryName" value={categoryInput.CategoryName} onChange={handleCategoryInput} placeholder="Enter category name"
                            className={"w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700" + 
                            (categoryError.categorynameError ? " border-red-500" : "border-gray-300")}
                        />
                        {
                            categoryError.categorynameError &&
                            <p className="text-red-500 text-sm">{categoryError.categorynameError}</p>
                        }

                        <label className="block text-sm font-medium text-gray-800 mb-2">Is Active *</label>
                        <select name="IsActive" value={categoryInput.IsActive} onChange={handleCategoryInput}
                            className={"w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700" + 
                            ( categoryError.isactiveError  ? " border-red-500"  : "border-gray-300")}>

                            <option value="">Select Status</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {
                            categoryError.isactiveError &&
                            <p className="text-red-500 text-sm">{categoryError.isactiveError}</p>
                        }


                        <div className="flex gap-3 mt-6">
                            <button type="submit" className="w-full px-7 py-3 rounded-lg text-white font-semibold bg-linear-to-b from-green-600 to-green-700 cursor-pointer">
                                {isUpdate ? "Update Category" : "Add Category"}
                            </button>

                            {
                                isUpdate &&
                                <button type="button" onClick={cancelUpdate} className="w-full px-7 py-3 rounded-lg border border-gray-300 cursor-pointer">
                                    Cancel
                                </button>
                            }
                        </div>
                            
                    </form >

                </div>

                {/* --------- Category List table --------- */}
                <div className="w-[60%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Category List</h2>
                    <div className="overflow-x-auto">

                        <table className="w-full border">
                            <thead className="bg-[#f3f5f2]">
                                <tr>
                                    <th className="text-left px-5 py-4 border border-gray-300">Sr No</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Category Name</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Is Active</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categoryList.map((item,index)=>(
                                        
                                        <tr key={index}>

                                            <td className="px-5 py-4 border border-gray-300">{index + 1}</td>
                                            <td className="px-5 py-4 border border-gray-300">{item.category_name}</td>
                                            <td className="px-5 py-4 border border-gray-300">{item.isactive}</td>
                                            <td className="px-5 py-4 border border-gray-300"> 
                                                <button type="button" onClick={()=>editCategory(item)} className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">
                                                   Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CategoryAdmin;