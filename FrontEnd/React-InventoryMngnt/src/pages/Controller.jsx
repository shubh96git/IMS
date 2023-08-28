import Login from "../pages/SignIn-SignUp/Login";
import { Route, Routes } from 'react-router-dom'
import ProductList from "./Employee/Products/ProductList";
import AddProduct from "./Employee/Products/addProduct";
import EditProduct from "./Employee/Products/EditProduct";
import Home from "../pages/Employee/Home"
import Cart from "../pages/Employee/Products/Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./Orders";

import AddSupplier from "../pages/Admin/Supplier/addSupplier"
import SellerList from "../pages/Admin/Supplier/supplierList";
import CategoryList from "../pages/Admin/Category/CategoryList";
import AddCategory from "../pages/Admin/Category/addCategory";
import SubCategoryList from "../pages/Admin/SubCategory/SubCategoryList";
import AddSubCategory from "../pages/Admin/SubCategory/addSubCategory";
import SubSubCategoryList from "../pages/Admin/SubSubCategory/SubSubCategoryList";
import AddSubSubCategory from "../pages/Admin/SubSubCategory/addSubSubCategory";
import UserList from "../pages/Admin/Users/Users";
import AddUser from "../pages/Admin/Users/AddUser";
import UserListApproved from "../pages/Admin/Users/UsersApproved"
import UserListPending from "../pages/Admin/Users/UsersPending"
import UserListRemoved from "../pages/Admin/Users/UsersRemoved"


function Controller() {
  
  
    return ( 
        <>
         <div className='container'>
            <Routes>
              {/* LOGIN ROUTE */}
              {/* home component  */}
              <Route path='/' element={<Login/>} />

              {/* EMPLOYEE ROUTES */}
              {/* APPLY FOR EMPLOYEE */}
              {/* AddUser/EmployeeComponent */}
              <Route path='/addUser' element={<AddUser/>} />

              {/* PRODUCT  */}
                {/* employee default */}
                <Route Exact path="/shop" element={<Home/>}/>
                {/* ProductListComponent */}
                <Route path='/allProduct' element={<ProductList/>} />
                {/* cart */}
                <Route path="/cart" element={<Cart/>}/>
                {/* edit product */}
                <Route path='/product/edit/:productId' element={<EditProduct/>} />
                {/* Add product */}
                <Route path='/addProduct' element={<AddProduct/>} />
                {/* Orders */}
                <Route path='/orders' element={<Orders/>}/>

              
                  
              {/* ADMIN ROUTES */}

              {/* EMPLYOEE MGMT */}
                {/* User/EmployeeListComponent */}
                <Route path='/emps' element={<UserList/>} />
                {/* PENDING User/EmployeeComponent */}
                <Route path='/pendingUser' element={<UserListPending/>} />
                {/* REMOVED USER/EmployeeComponent */}
                <Route path='/removedUser' element={<UserListRemoved/>} />
                {/* REMOVED USER/EmployeeComponent */}
                <Route path='/approvedUser' element={<UserListApproved/>} />

              {/* PRODUCT MGMT */}
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

              {/* SELLER MGMT */}
                {/* SellerListComponent */}
                <Route path='/supplier' element={<SellerList/>} />
                {/* AddSellerComponent */}
                <Route path='/supplier/addSupplier' element={<AddSupplier/>} />

          
                      
            </Routes>
          </div> 
          <ToastContainer/>
        </>);
}

export default Controller;