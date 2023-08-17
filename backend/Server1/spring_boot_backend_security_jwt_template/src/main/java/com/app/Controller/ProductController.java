package com.app.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.ApiResponse;
import com.app.DTO.ProductDTO;
import com.app.Service.ProductService;

import lombok.*;

@RestController
@RequestMapping("/product")
@Validated
public class ProductController {
	
	//
	@Autowired
	private ProductService prodService;
	
	// add product.
	@PostMapping("/addProduct")
	public ApiResponse addNewProduct(@RequestBody @Valid ProductDTO prodDto ) {
		
		//
		System.out.println("inside addNewProduct ProductController");
		
		//
		return prodService.addNewProduct(prodDto);
	}

}
