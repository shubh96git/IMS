package com.app.Service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.DTO.ApiResponse;
import com.app.DTO.LoginDTO;
import com.app.DTO.UserDTO;
import com.app.POJOS.Cart;
import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.POJOS.UserRole;
import com.app.Repository.CartRepository;
import com.app.Repository.UserRepository;
import com.app.customException.ResourceNotFoundException;

@Service
@Transactional
public class UserServiceImpl implements UserService {

 // DEPENDANCY SECTION :
	@Autowired
	private UserRepository userRepos;
	@Autowired
	private CartRepository cartRepos;
	@Autowired
	private ModelMapper mapper;

 // BUSINESS LOGIC METHODS :
	// adding the employee.
	@Override
	public ApiResponse addNewEmployee(User user) {

		//
		System.out.println("inside userService ServiceImpl" + user);

		// default status of newly added employee is PENDING.
		user.setStatus(Status.PENDING);
		user.setUserRole(UserRole.EMPLOYEE);
		
//		System.out.println("in service =>"+user);
		//
		userRepos.save(user);

		//
		return new ApiResponse("Registration successful.....pending for ADMIN APPROVAL!!");
	}

	// getting the data of all users.
	@Override
	public List<UserDTO> getAllUsers() {

		//
		System.out.println("inside getAllUsers ServiceImpl");
		
		//
		List<User> userList = userRepos.findAll();

		//
		List<UserDTO> empDTOList = userList.stream()
				.map(emp -> mapper.map(emp, UserDTO.class))
				.collect(Collectors.toList());

		//
		return empDTOList;
	}

	// getting the data of all employees.
	@Override
	public List<UserDTO> getAllEmployees(Status status) {

		//
		System.out.println("inside getAllEmployees ServiceImpl");
		
		//
		List<User> empList = userRepos.findByStatusAndUserRole(status,UserRole.EMPLOYEE);
		
		//
		List<UserDTO> empDTOList = empList.stream()
				.map(emp -> mapper.map(emp, UserDTO.class))
				.collect(Collectors.toList());

		
		return empDTOList;
	}

	// getting the data of employee based on the empId
	@Override
	public User getEmployeeDetails(Long empId) {

		//
		System.out.println("inside getEmployeeDetails ServiceImpl");
		
		//TODO THROW CUSTOM EXCEPTION FROM HERE.
		User user = userRepos.findById(empId)
							 .orElseThrow();
		return user;
	}

	// updating the data of employee :
	// 1. getting the data of employee based on Id : getEmployeeDetails(Long empId) {
	// 2. updating the database using the new data.
	@Override
	public ApiResponse updateEmplDetails(User user) {
		
		//
		System.out.println("inside updateEmplDetails ServiceImpl");
		
		//
		userRepos.save(user);
		
		//
		return new ApiResponse("employee updation successful...");
	}

	//
	@Override
	public User loginUser(LoginDTO credentials) {

		//
	   return userRepos.findByEmailAndPassword(credentials.getEmail(),credentials.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid Dept Id !!!!")	);
	    
	}

	//
	@Override
	public List<Cart> getCart(Long empId){
		
		//
		User employee = userRepos.findById(empId).orElseThrow();
		
		//
		return cartRepos.findByUser(employee);
	}
}
