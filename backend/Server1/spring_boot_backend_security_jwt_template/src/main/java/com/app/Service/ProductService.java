package com.app.Service;

import com.app.DTO.ApiResponse;
import com.app.DTO.ProductDTO;
import com.app.POJOS.Product;

public interface ProductService {

	// add product
	ApiResponse addNewProduct(ProductDTO newProd);
	
}
