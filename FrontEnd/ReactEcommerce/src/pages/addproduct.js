import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/SignUp.css";

function AddProduct() {
  return (
    <div className="center">
      <form className="form">
        <p className="title">Add Product </p>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" />
            <span>Product Name</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" />
            <span>Product Price</span>
          </label>
        </div>
        <label>
          <input required placeholder type="number" className="input" />
          <span>Product Quantity</span>
        </label>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Category</span>
        </label>
        <label>
          <input required placeholder type="email" className="input" />
          <span>SubCategory</span>
        </label>
       
      
      </form>
    </div>
  );
}

export default AddProduct;
