import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ProductAdmin=()=>{
    
    const [productInput, setProductInput] = useState({
        category: "",
        productname: "",
        packagingdetail: "",
        hscode: "",
        image: null
    });

    const imageRef = useRef()

    const [specificationInput, setSpecificationInput] = useState({
        title: "",
        value: ""
    });
    const [specificationlist, setSpecificationlist] = useState([]);

    const [gradesInput, setGradesInput] = useState({
        grades: ""
    });
    const [gradeslist, setGradeslist] = useState([]);
    const [errorMsg, setErrorMsg] = useState({});
    const [backendMessage, setBackendMessage] = useState({
        msg: "",
        type: ""
    });
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [productId, setProductId] = useState("");

    const [activeCategoryTab, setActiveCategoryTab] = useState("");

    const errorFieldMap = {
        category: "categoryError",
        productname: "productnameError",
        packagingdetail: "packagingdetailError",
        hscode: "hscodeError",
        image: "imageError",
        title: "titleError",
        value: "valueError",
        grades: "gradesError"
    };

    function handleProductInput(e){
        setProductInput({
            ...productInput,
            [e.target.name]: e.target.type === "file" ? e.target.files[0] : e.target.value
        });
     
        setErrorMsg({
            ...errorMsg,
            [errorFieldMap[e.target.name]]: ""
        });
    }

    function handleSpecificationInput(e) {
        setSpecificationInput({
            ...specificationInput,
            [e.target.name]: e.target.value
        });
        setErrorMsg({
            ...errorMsg,
            [errorFieldMap[e.target.name]]: ""
        });
    }

    function handleGradesInput(e) {
        setGradesInput({
            ...gradesInput,
            [e.target.name]: e.target.value
        });
        setErrorMsg({
            ...errorMsg,
            [errorFieldMap[e.target.name]]: ""
        });
    }

    function validateProduct(){

        let error = {};
        let isValid = true;

        if(!productInput.category){
            error.categoryError = "Please Select Category";
            isValid = false;
        }

        if(!productInput.productname.trim()){
            error.productnameError = "Product Name is Required";
            isValid = false;
        }

        if(!productInput.packagingdetail.trim()){
            error.packagingdetailError = "Packaging Detail is Required";
            isValid = false;
        }

        if(!productInput.hscode.trim()){
            error.hscodeError = "HS Code is Required";
            isValid = false;
        }

        if(!productInput.image){
            error.imageError = "Please Select Product Image";
            isValid = false;
        }

        if(specificationlist.length === 0){
            error.specificationlistError = "Please Add At Least One Specification";
            isValid = false;
        }

        if(gradeslist.length === 0){
            error.gradeslistError = "Please Add At Least One Grade";
            isValid = false;
        }
        
        setErrorMsg(error);

        return isValid;

    }
    function validateSpecification(){

        let error = {};
        let isValid = true;

        if(!specificationInput.title.trim()){
            error.titleError = "Title is Required";
            isValid = false;
        }

        if(!specificationInput.value.trim()){
            error.valueError = "Value is Required";
            isValid = false;
        }

        setErrorMsg({
            ...errorMsg,
            ...error
        });
        return isValid;
    }
    function validateGrades(){

        let error = {};
        let isValid = true;

        if(!gradesInput.grades.trim()){
            error.gradesError = "Grade is Required";
            isValid = false;
        }

        setErrorMsg({
            ...errorMsg,
            ...error
        });
        return isValid;
    }

    function addSpecification() {

        if(validateSpecification()){

            setSpecificationlist([
                ...specificationlist,
                specificationInput
            ]);

            setSpecificationInput({
                title: "",
                value: ""
            });

            setErrorMsg({
                ...errorMsg,
                titleError: "",
                valueError: "",
                specificationlistError: ""
            });
        }
    }

    function addGrade() {

        if(validateGrades()){

            setGradeslist([
                ...gradeslist,
                gradesInput
            ]);

            setGradesInput({
                grades: ""
            });

            setErrorMsg({
                ...errorMsg,
                gradesError: "",
                gradeslistError: ""
            });
        }
    }

    function clearProductForm(){

        setProductInput({
            category: "",
            productname: "",
            packagingdetail: "",
            hscode: "",
            image: null
        });

        setSpecificationInput({
            title: "",
            value: ""
        });

        setSpecificationlist([]);

        setGradesInput({
            grades: ""
        });

        setGradeslist([]);
        setErrorMsg({});

        imageRef.current.value=""
    }

    function addProduct(e){
        e.preventDefault()
        if(validateProduct()){

            const formData = new FormData();
            formData.append("ProductName", productInput.productname);
            formData.append("CategoryId", productInput.category);
            formData.append("PackagingDetail", productInput.packagingdetail);
            formData.append("HsCode", productInput.hscode);
            formData.append("Image", productInput.image);
            if(!isUpdate){
                formData.append("SpecificationList", JSON.stringify(specificationlist));
                formData.append("GradesList", JSON.stringify(gradeslist));
            }

           axios({
                url: isUpdate ? `http://localhost:9000/updateproduct/${productId}` : "http://localhost:9000/addproduct",
                method: isUpdate ? "PUT" : "POST",
                data: formData
            })
            .then((response)=>{

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
                
                clearProductForm();
                getProducts();

                setIsUpdate(false);
                setProductId("");
            })
            .catch((error)=>{

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
            });
        }
    }

    function getCategories(){
        axios({
            url: "http://localhost:9000/getcategories",
            method: "GET"
        })
        .then((response)=>{
            setCategoryList(response.data);
            if(response.data.length > 0){
                setActiveCategoryTab(response.data[0].category_id);
            }
        })
        .catch((error)=>{
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
        });
    }

    function getProducts(){

        axios({
            url: "http://localhost:9000/getproducts",
            method: "GET"
        })
        .then((response)=>{
            setProductList(response.data);
        })
        .catch((error)=>{

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
        });
    }

    function editProduct(item){

        setIsUpdate(true);
        setProductId(item.product_id);

        setProductInput({
            category: item.category_id,
            productname: item.product_name,
            packagingdetail: item.packaging_detail,
            hscode: item.hs_code,
            image: null
        });
        
        setSpecificationlist(item.specifications || []); 
        setGradeslist(item.grades || []);
    }

    function cancelUpdate(){

        clearProductForm();
        setIsUpdate(false);
        setProductId("");
    }
    
    useEffect(()=>{
        getCategories();
        getProducts();
    },[]);
    return(
        <>
            {
                backendMessage.msg &&
                <div className={"fixed top-5 left-1/2 -translate-x-1/2 px-5 py-3 rounded-lg text-white font-medium shadow-lg z-50 " +
                    (backendMessage.type === "success" ? "bg-green-600" : "bg-red-600")}>
                    {backendMessage.msg}
                </div>
            }
        
            <div className="flex gap-3 items-start">

                <form onSubmit={addProduct} className="w-[31%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Product Details</h2>

                    <div className="space-y-5">
                        <label className="block text-sm font-medium text-gray-800 mb-2">Category</label>
                        <select name="category" value={productInput.category} onChange={handleProductInput} 
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none ${errorMsg.categoryError ? " border-red-500" : "border-gray-300"}`}>
                            <option value="">Select Category</option>
                            {
                                categoryList.map((list, index)=>(
                                    <option key={index} value={list.category_id}>
                                        {list.category_name}
                                    </option>
                                ))
                            }
                        </select>
                        {
                            errorMsg.categoryError &&
                            <p className="text-red-500 text-sm">{errorMsg.categoryError}</p>
                        }
                        
                        <label className="block text-sm font-medium text-gray-800 mb-2">Product Name</label>
                        <input type="text" name="productname" value={productInput.productname} onChange={handleProductInput} placeholder="Enter product name" 
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.productnameError ? " border-red-500" : "border-gray-300"}`}/>
                        {
                            errorMsg.productnameError &&
                            <p className="text-red-500 text-sm">{errorMsg.productnameError}</p>
                        }

                        <label className="block text-sm font-medium text-gray-800 mb-2">Packaging Detail</label>
                        <input type="text" name="packagingdetail" value={productInput.packagingdetail} onChange={handleProductInput} placeholder="Enter packaging detail" 
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.packagingdetailError ?  " border-red-500" : "border-gray-300"}`}/>
                        {
                            errorMsg.packagingdetailError &&
                            <p className="text-red-500 text-sm">{errorMsg.packagingdetailError}</p>
                        }

                        <label className="block text-sm font-medium text-gray-800 mb-2">HS Code</label>
                        <input type="text" name="hscode" value={productInput.hscode} onChange={handleProductInput} placeholder="Enter HS code" 
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.hscodeError ? " border-red-500" : "border-gray-300"}`}/>
                        {
                            errorMsg.hscodeError &&
                            <p className="text-red-500 text-sm">{errorMsg.hscodeError}</p>
                        }

                        <label className="block text-sm font-medium text-gray-800 mb-2">Product Image</label>
                        <input type="file" name="image" onChange={handleProductInput} ref={imageRef}
                        className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.imageError ? " border-red-500" : "border-gray-300"}`}/>
                        {
                            errorMsg.imageError &&
                            <p className="text-red-500 text-sm">{errorMsg.imageError}</p>
                        }
                    </div>

                    <div className="flex justify-between items-center mb-4 mt-8">
                        <h3 className="text-lg font-semibold text-[#8b4513]">Specifications</h3>
                        <button type="button" disabled={isUpdate} onClick={addSpecification} className="px-4 py-2 rounded-lg bg-[#2f855a] text-white text-sm font-medium cursor-pointer">
                            Add
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <input type="text" name="title" placeholder="Title" value={specificationInput.title} onChange={handleSpecificationInput} 
                            className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.titleError ? " border-red-500" : "border-gray-300"}`}/>
                            {
                                errorMsg.titleError &&
                                <p className="text-red-500 text-sm">{errorMsg.titleError}</p>
                            }
                        </div> 

                        <div>   
                            <input type="text" name="value" placeholder="Value" value={specificationInput.value} onChange={handleSpecificationInput} 
                            className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.valueError ? " border-red-500" : "border-gray-300"}`}/>
                            {
                                errorMsg.valueError &&
                                <p className="text-red-500 text-sm">{errorMsg.valueError}</p>
                            }
                        </div>    
                    </div>

                    <div className="mt-6 overflow-x-auto">

                        <table className="w-full">
                            <thead className="bg-[#f3f5f2]">
                                <tr>
                                    <th className="text-left px-5 py-4 border border-gray-300"> Sr No.</th>
                                    <th className="text-left px-5 py-4 border border-gray-300"> Title</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specificationlist.map((list, index)=> (
                                        <tr key={index}>
                                            <td className="px-5 py-4 border border-gray-300">{index+1}</td>
                                            <td className="px-5 py-4 border border-gray-300">{list.title}</td>
                                            <td className="px-5 py-4 border border-gray-300">{list.value}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        {
                            errorMsg.specificationlistError &&
                            <p className="text-red-500 text-sm mt-2">{errorMsg.specificationlistError}</p>
                        }

                    </div>

                    <div className="flex justify-between items-center mb-4 mt-8">
                        <h3 className="text-lg font-semibold text-[#8b4513]">Quality Grades</h3>
                        <button type="button" disabled={isUpdate} onClick={addGrade} className="px-4 py-2 rounded-lg bg-[#2f855a] text-white text-sm font-medium cursor-pointer">
                            Add
                        </button>
                    </div>

                    <input type="text" name="grades" placeholder="Enter grade" value={gradesInput.grades} onChange={handleGradesInput} 
                    className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700 focus:outline-none${errorMsg.gradesError ? " border-red-500" : "border-gray-300"}`}/>
                    {
                        errorMsg.gradesError &&
                        <p className="text-red-500 text-sm">{errorMsg.gradesError}</p>
                    }

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#f3f5f2]">
                                <tr>
                                    <th className="text-left px-5 py-4 border border-gray-300"> Sr No.</th>
                                    <th className="text-left px-5 py-4 border border-gray-300"> Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    gradeslist.map(function(list, index) {
                                        return (
                                            <tr key={index}>
                                                <td className="px-5 py-4 border border-gray-300">{index+1}</td>
                                                <td className="px-5 py-4 border border-gray-300">{list.grades}</td>
                                            </tr>
                                        );

                                    })
                                }
                            </tbody>
                        </table>
                        {
                            errorMsg.gradeslistError &&
                            <p className="text-red-500 text-sm mt-2">{errorMsg.gradeslistError}</p>
                        }
                    </div>
                    <div className="flex gap-3 mt-8">
                        <button type="submit" className="w-full px-7 py-3 rounded-lg text-white font-semibold bg-linear-to-b from-green-600 to-green-700 cursor-pointer">
                            {isUpdate ? "Update Product" : "Add Product"}
                        </button>

                        {
                            isUpdate &&
                            <button type="button" onClick={cancelUpdate} className="w-full px-7 py-3 rounded-lg border border-gray-300 cursor-pointer">
                                Cancel
                            </button>
                        }
                    </div>

                </form >

                {/* --------- Product List Table ---------*/}
                <div className="w-[69%] bg-white rounded-2xl shadow-md p-6">
                   

                    {
                        categoryList.map((list, index)=>(
                            <button key={index} type="button" onClick={()=>setActiveCategoryTab(list.category_id)}
                                className=
                                {
                                    activeCategoryTab == list.category_id
                                    ? "px-3 py-2 text-md mb-3 rounded-full border bg-[#2f855a] text-white cursor-pointer mr-1"
                                    : "px-3 py-2 text-md mb-3 rounded-full border border-gray-300 cursor-pointer mr-1 hover:bg-[#2f855a] hover:text-white transition-all duration-300"
                                }>
                                {list.category_name}
                            </button>
                        ))
                    }
                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-1"> Product Data</h2>
                    <div className="overflow-x-auto">

                        <table className="w-full table-fixed">
                            <thead className="bg-[#f3f5f2]">
                                <tr>
                                    <th className="text-left px-5 py-4 border border-gray-300">Sr No</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Category</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Product Name</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Packaging Detail</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">HS Code</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Image</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Specifications</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Grades</th>
                                    <th className="text-left px-5 py-4 border border-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    productList.map((list, index)=>{

                                        if(list.category_id == activeCategoryTab){

                                            return(
                                                <tr key={index}>

                                                    <td className="text-left px-5 py-3 border border-gray-300">{index + 1}</td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">{list.category_name}</td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">{list.product_name}</td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">{list.packaging_detail}</td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">{list.hs_code}</td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">
                                                        <img src={`http://localhost:9000/uploads/${list.image}`} alt="product" className="w-14 h-14 object-cover rounded"/>
                                                    </td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">
                                                        {
                                                            list.specifications.map((item, index)=>(
                                                                <div key={index}>
                                                                    {item.title} : {item.value}
                                                                </div>
                                                            ))
                                                        }
                                                    </td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">
                                                        {
                                                            list.grades.map((item, index)=>(
                                                                <div key={index}>
                                                                    {item.grades}
                                                                </div>
                                                            ))
                                                        }
                                                    </td>
                                                    <td className="text-left px-5 py-3 border border-gray-300">
                                                        <button type="button" onClick={()=>editProduct(list)}className="px-4 py-1 rounded-lg bg-blue-600 text-white cursor-pointer">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductAdmin;