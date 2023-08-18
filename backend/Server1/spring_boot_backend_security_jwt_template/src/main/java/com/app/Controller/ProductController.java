
package com.app.Controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.ProductDTO;
import com.app.Service.ProductService;
import static org.springframework.http.MediaType.*;

@RestController
@RequestMapping("/product")
public class ProductController {

	//
	@Autowired
	private ProductService prodService;

	// add new product :
	@PostMapping("/addProduct")
	public ApiResponse addNewProduct(@RequestBody @Valid ProductDTO prodDto) {

		//
		System.out.println("inside addNewProduct ProductController");

		//
		return prodService.addNewProduct(prodDto);
	}

	// finding the product using the id.
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@RequestParam Long id) {

		//
		System.out.println("inside getProductById ProductController");

		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.getProductById(id));
	}

	// updating the product info :
	@PutMapping("/editProduct")
	public ResponseEntity<?> editProduct(@RequestBody @Valid ProductDTO productDto) {
		
		//
		System.out.println("inside editProduct ProductController");
		
		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.addNewProduct(productDto));
	}

	// deleting the product
	@GetMapping("/delete/{productId}")
	public ResponseEntity<?> deleteProduct(@RequestParam Long productId){
		
		//
		System.out.println("inside deleteProduct ProductController");
		
		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.deleteProductById(productId));
	}
	
	//
	@PostMapping(value = "/images/{productId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long productId, @RequestParam MultipartFile imageFile) throws IOException {
		
		//
	    System.out.println("in upload img ProductController");
	    
	    //
	    return ResponseEntity.status(HttpStatus.CREATED).body(prodService.addImagesForProduct(productId, imageFile));
	  }
	
	//
	@GetMapping(value="/images/{productId}",produces = {IMAGE_GIF_VALUE,IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> downloadImage(@PathVariable Long productId) throws IOException {
		
		System.out.println("in download img ");
		return ResponseEntity.ok(prodService.downloadImage(productId));
	}
	
	
}