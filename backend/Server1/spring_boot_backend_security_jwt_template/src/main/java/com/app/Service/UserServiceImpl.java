package com.app.Service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.DTO.ApiResponse;
import com.app.DTO.LoginDTO;
import com.app.DTO.UserDTO;
import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.POJOS.UserRole;
import com.app.Repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

 // DEPENDANCY SECTION :
	@Autowired
	private UserRepository userRepos;
	@Autowired
	private ModelMapper mapper;

 // BUSINESS LOGIC METHODS :
	// adding the employee.
	@Override
	public ApiResponse addNewEmployee(User user) {

		//
		System.out.println("inside userService ServiceImpl" + user);

		//
		userRepos.save(user);

		//
		return new ApiResponse("Employee Added successfully..");
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
	public ApiResponse loginUser(LoginDTO credentials) {

		//
	    userRepos.findByEmailAndPassword(credentials.getEmail(),credentials.getPassword()).orElseThrow();
	    
	    //
	    return new ApiResponse("login is successful");
	}

}
