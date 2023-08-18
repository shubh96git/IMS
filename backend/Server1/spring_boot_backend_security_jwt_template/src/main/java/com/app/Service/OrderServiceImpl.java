package com.app.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.ApiResponse;
import com.app.POJOS.Cart;
import com.app.POJOS.Order;
import com.app.POJOS.OrderDetail;
import com.app.POJOS.Product;
import com.app.POJOS.User;
import com.app.Repository.CartRepository;
import com.app.Repository.OrderDetailRepository;
import com.app.Repository.OrderRepository;
import com.app.Repository.ProductRepository;
import com.app.Repository.UserRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{

	//
	@Autowired
	private OrderDetailRepository orderDtlRepos;
	@Autowired
	private UserRepository userRepos;
	@Autowired
	private CartRepository cartRepos;
	@Autowired
	private OrderRepository orderRepos;
	@Autowired
	private ProductRepository prodRepos;
	
	@Override
	  public ApiResponse confirmPayment(Long id) {
	    
	    User user = userRepos.findById(id).orElseThrow();
	    
	    List<Cart> carts = cartRepos.findByUser(user);
	    List<Product> products = new ArrayList<>();
	    List<Integer> quantities = new ArrayList<>();
	    
	    int total = 0;
	    for(Cart cart : carts) {
	      total += cart.getProduct().getPrice() * cart.getQuantity();
	      Product product = prodRepos.findById(cart.getProduct().getId()).orElseThrow();
	      product.setQuantity(product.getQuantity() - cart.getQuantity());
	      products.add(product);
	      quantities.add(cart.getQuantity());
	    }
	    
	    Order order = new Order();
	    
	    order.setEmployee(user);
	    order.setTotal(total);
	    order.setOrderDate(LocalDate.now());
	    
	    Order savedOrder = orderRepos.save(order);
	    System.out.println("sed ->" + savedOrder.getId());
	    
	    for(int i=0; i<carts.size(); i++) {
	      OrderDetail orderDetail = new OrderDetail();
	      orderDetail.setOrder(savedOrder);
	      orderDetail.setProduct(products.get(i));
	      orderDetail.setQuantity(quantities.get(i));
	      orderDtlRepos.save(orderDetail);
	    }
	    
	    return new ApiResponse("Order placed successfully");
	  }
}
