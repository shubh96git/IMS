import "../../node_modules/bootstrap/dist/css/bootstrap.css";


function Product() {
    return ( 
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#!">
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  All Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Popular Items
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  New Arrivals
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit" >
            <i className="bi-cart-fill me-1" />
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
  {/* Header*/}
      <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/fa2f62b8b6225ad7.jpg?q=50"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4baaf288ad17c24e.png?q=50"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

   

  {/* Section*/}
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
          <div className="card h-100">
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://rukminim2.flixcart.com/image/450/300/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Fancy Product</h5>
                {/* Product price*/}
                $40.00 - $80.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  View options
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Sale badge*/}
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://rukminim2.flixcart.com/image/450/300/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Special Item</h5>
                {/* Product reviews*/}
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                </div>
                {/* Product price*/}
                <span className="text-muted text-decoration-line-through">
                  $20.00
                </span>
                $18.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Sale badge*/}
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://rukminim2.flixcart.com/image/200/200/xif0q/kids-t-shirt/m/3/k/9-10-years-bnv-dyl-ogrpolo-boyplain-blive-original-imagny7yqkjugags.jpeg?q=70"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Sale Item</h5>
                {/* Product price*/}
                <span className="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Popular Item</h5>
                {/* Product reviews*/}
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                </div>
                {/* Product price*/}
                $40.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Sale badge*/}
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Sale Item</h5>
                {/* Product price*/}
                <span className="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Fancy Product</h5>
                {/* Product price*/}
                $120.00 - $280.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  View options
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Sale badge*/}
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Special Item</h5>
                {/* Product reviews*/}
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                </div>
                {/* Product price*/}
                <span className="text-muted text-decoration-line-through">
                  $20.00
                </span>
                $18.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            {/* Product image*/}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">Popular Item</h5>
                {/* Product reviews*/}
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                  <div className="bi-star-fill" />
                </div>
                {/* Product price*/}
                $40.00
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer*/}
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">
        Copyright © Your Website 2023
      </p>
    </div>
  </footer>
</>

     );
}

export default Product;