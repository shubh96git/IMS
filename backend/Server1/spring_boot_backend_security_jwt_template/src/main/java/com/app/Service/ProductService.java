package com.app.Service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.ProductDTO;

public interface ProductService {

	// add product
	ApiResponse addNewProduct(ProductDTO newProd);

	//
	ProductDTO getProductById(Long id);
	
	//
	ApiResponse deleteProductById(Long id);
	
	//
	ApiResponse addImagesForProduct(Long productId, MultipartFile image) throws IOException;
	
	//
	public byte[] downloadImage(Long productImageId) throws IOException;
	
}
