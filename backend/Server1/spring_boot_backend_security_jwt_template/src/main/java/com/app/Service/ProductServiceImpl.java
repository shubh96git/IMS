package com.app.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.CartDTO;
import com.app.DTO.ProductDTO;
import com.app.POJOS.Cart;
import com.app.POJOS.Image;
import com.app.POJOS.Product;
import com.app.POJOS.ProductStatus;
import com.app.POJOS.SubSubCategory;
import com.app.POJOS.Supplier;
import com.app.POJOS.User;
import com.app.Repository.CartRepository;
import com.app.Repository.ProductImageRepository;
import com.app.Repository.ProductRepository;
import com.app.Repository.SubSubCategoryRepository;
import com.app.Repository.SupplierRepository;
import com.app.Repository.UserRepository;

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
	@Autowired
	private ProductImageRepository prodImageRepos;
	@Autowired
	private UserRepository userRepos;
	@Autowired
	private CartRepository cartRepos;

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
		product.setSeller(supplier);
		product.setCategory(category);
		product.setStatus(ProductStatus.ADDED);

		//
		prodRepos.save(product);

		//
		return new ApiResponse("Product addition successful");
	}

	// Get the product by using id.
	@Override
	public ProductDTO getProductById(Long id) {
		
		//
		System.out.println("inside getProductById ProductServiceImpl");
		
		//
		Product product = prodRepos.findById(id).orElseThrow();
		List<Image> productImages = prodImageRepos.findByProducts(product);
		
		ProductDTO productDto = mapper.map(product, ProductDTO.class);
		List<Long> list = new ArrayList<>();
		for(Image pi : productImages) {
		      list.add(pi.getId());
		 }
		productDto.setProdImageIds(list);
		return productDto;
	}

	// deleting the product
	@Override
	public ApiResponse deleteProductById(Long id) {
		
		//
		Product product = prodRepos.findById(id).orElseThrow();
		
		//
		product.setStatus(ProductStatus.REMOVED);
		
		//
		return new ApiResponse("Product deleted successfully...");
	}

	// uploading the image for the product
	@Override
	public ApiResponse addImagesForProduct(Long productId, MultipartFile image) throws IOException {
		
		//
		Image prodImage = new Image();
		Product product = prodRepos.findById(productId).orElseThrow();
		
		//
		prodImage.setImage(image.getBytes());
		prodImage.setProducts(product);
		
		//
		prodImageRepos.save(prodImage);
		
		//
		return new ApiResponse("image for product-id "+prodImage.getProducts().getId()+" is added successfully..");
	}

	@Override
	public byte[] downloadImage(Long productImageId) throws IOException {
		
			// 
			Image image = prodImageRepos.findById(productImageId).orElseThrow();
		   
		    //
		    return image.getImage();  
	}
	
	@Override
	  public ApiResponse addProductToCart(CartDTO cartDto) {
	    
	    User user = userRepos.findById(cartDto.getUserId()).orElseThrow();
	    Product product = prodRepos.findById(cartDto.getProductId()).orElseThrow();
	    
	    Cart cart = new Cart();
	    cart.setProduct(product);
	    cart.setUser(user);
	    cart.setQuantity(cartDto.getQuantity());
	    
	    cartRepos.save(cart);
	    
	    System.out.println(cart);
	    return new ApiResponse("Product added to cart");
	  }

}
