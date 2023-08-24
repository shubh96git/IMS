import Login from "./Login";
import { Route, Routes } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import AddSupplier from "./Admin/Supplier/addSupplier";
import AddSupplierAddrs from "./Admin/Supplier/addSupplierAdrs";
import SellerList from "./Admin/Supplier/supplierList";
import CategoryList from "./Admin/Category/CategoryList";
import AddCategory from "./Admin/Category/addCategory";
import SubCategoryList from "./Admin/SubCategory/SubCategoryList";
import AddSubCategory from "./Admin/SubCategory/addSubCategory";
import SubSubCategoryList from "./Admin/SubSubCategory/SubSubCategoryList";
import AddSubSubCategory from "./Admin/SubSubCategory/addSubSubCategory";
import UserList from "./Admin/Users/Users";
import AddUser from "./Admin/Users/AddUser";
import NavigationBarEmployee from "./NavigationBarEmployee";
import FrontPage from "./FrontPage";
import ProductList from "./Employee/Products/ProductList";
import AddProduct from "./Employee/Products/addProduct";


function Controller() {
  const loginStatus = true;
    return ( 
        <div className='container-fluid'>
          {loginStatus && <NavigationBarEmployee/> }
          {/* {loginStatus && <NavigationBar /> } */}
    <div className='container'>
    <Routes>

        {/* home component  */}
  <Route Exact path='/' element={<FrontPage/>} />

  {/* SellerListComponent */}
  <Route path='/supplier' element={<SellerList/>} />

  {/* AddSellerComponent */}
  <Route path='/supplier/addSupplier' element={<AddSupplier/>} />

  {/* AddSellerAddressComponent */}
  {/* <Route path='/' element={<AddSupplierAddrs/>} /> */}

  {/* CategoryListComponent */}
  <Route path='/category' element={<CategoryList/>} />

  {/* AddCategoryComponent */}
  <Route path='/addCategory' element={<AddCategory/>} />

  {/* SubCategoryListComponent */}
  <Route path='/subcategory' element={<SubCategoryList/>} />

  {/* AddSubCategoryComponent */}
  <Route path='/addSubCategory' element={<AddSubCategory/>} />

    {/* SubSubCategoryListComponent */}
  <Route path='/subsubcategory' element={<SubSubCategoryList/>} />

  {/* AddSubSubCategoryComponent */}
  <Route path='/addSubSubCategory' element={<AddSubSubCategory/>} />

  {/* User/EmployeeListComponent */}
  <Route path='/emps' element={<UserList/>} />

  {/* AddUser/EmployeeComponent */}
  <Route path='/addUSer' element={<AddUser/>} />

  {/* ProductListComponent */}
  <Route path='/product' element={<ProductList/>} />

{/* AddUser/EmployeeComponent */}
<Route path='/addProduct' element={<AddProduct/>} />

  {/* home component  */}
  <Route path='/' element={<Login/>} />



    </Routes>
  </div> 
  </div> );
}

export default Controller;