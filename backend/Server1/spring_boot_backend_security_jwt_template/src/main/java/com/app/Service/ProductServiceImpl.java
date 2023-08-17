package com.app.Service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.ApiResponse;
import com.app.DTO.ProductDTO;
import com.app.POJOS.Category;
import com.app.POJOS.Product;
import com.app.POJOS.SubSubCategory;
import com.app.POJOS.Supplier;
import com.app.Repository.ProductRepository;
import com.app.Repository.SubSubCategoryRepository;
import com.app.Repository.SupplierRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	//
	@Autowired 
	private ProductRepository prodRepos;
	@Autowired
	private SupplierRepository supplierRepos;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private SubSubCategoryRepository categoryRepos;
	// add product
	@Override
	public ApiResponse addNewProduct(ProductDTO prodDto) {

		//
		System.out.println("inside addNewProduct ProductServiceImpl");
		
		//
		Supplier supplier = supplierRepos.findById(prodDto.getSellerId()).orElseThrow();
		SubSubCategory category = categoryRepos.findById(prodDto.getCategoryId()).orElseThrow();
		
		//
		Product product = mapper.map(prodDto, Product.class);
		product.setSellerId(supplier);
		product.setCategoryId(category);
		
		//
		prodRepos.save(product);
		
		//
		return new ApiResponse("Product addition successful");
	}

	
}
