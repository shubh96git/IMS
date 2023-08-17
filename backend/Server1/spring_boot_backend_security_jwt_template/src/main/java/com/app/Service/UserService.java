package com.app.Service;

import java.util.List;

import com.app.DTO.ApiResponse;
import com.app.DTO.UserDTO;
import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.POJOS.UserRole;

public interface UserService {

	// Add new employee :
	ApiResponse addNewEmployee(User user);
	
	// Get all User :
	List<UserDTO> getAllUsers();
	
	// Get all employee
	List<UserDTO> getAllEmployees(Status status);
	
	// Get employee by Id
	User getEmployeeDetails(Long empId);
	
	// Edit Employee
	// finding the empl :  User getEmployeeDetails(Long empId);
	ApiResponse updateEmplDetails(User user);
	
}
