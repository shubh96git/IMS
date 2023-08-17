package com.app.Controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.ApiResponse;
import com.app.DTO.UserDTO;
import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
 // DEPENDANCIES :
 //-----------------------------------------------------------------------------------
	@Autowired
	private UserService userService;
	@Autowired
	private ModelMapper mapper;
	
 // ENDS POINTS :
 //-----------------------------------------------------------------------------------
 // Adding the new employee : 
	@PostMapping("/addEmpl")
	public ResponseEntity<?> addNewEmployee(@RequestBody User user){
		
		//
		System.out.println("inside userController..  " + user);
		
		//
		ApiResponse responseFromServ = userService.addNewEmployee(user);
		
		//
		return ResponseEntity.status(HttpStatus.CREATED).body(responseFromServ);
	}

 // GET END POINTS :
	// getting the info of all the Users
	@GetMapping("/allUsers")
	public List<UserDTO> getAllUsers(){
		
		//
		System.out.println("inside getAllemployee userControler");
		
		//
		return userService.getAllUsers();
	}
	
	// getting info of all Active Employee
	@GetMapping("/allActiveEmpl")
	public List<UserDTO> getAllApprovedEmployee(){
		
		//
		System.out.println("inside getAllApprovedEmployee userControler");
		
		//
		return userService.getAllEmployees(Status.APPROVED);
	}
	
	// getting info of all Pending Employee
	@GetMapping("/allPendingEmpl")
	public List<UserDTO> getAllPendingEmployee(){
		
		//
		System.out.println("inside getAllApprovedEmployee userControler");
		
		//
		return userService.getAllEmployees(Status.PENDING);
	}

	// getting info of all Removed Employee
	@GetMapping("/allRemovedEmpl")
	public List<UserDTO> getAllRemovedEmployee(){
		
		//
		System.out.println("inside getAllRemovedEmployee userControler");
		
		//
		return userService.getAllEmployees(Status.REMOVED);
	}

	// getting info of Employee based on id.
	@GetMapping("/emplDetails/{empId}")
	public UserDTO getEmployeeDetails(@RequestParam Long empId) {
		
		//
		System.out.println("inside getEmployeeDetails userControler");
		
		//
		User user = userService.getEmployeeDetails(empId);
		
		//
		return mapper.map(user, UserDTO.class);
	}
	
 //UPDATING THE EMPLOYEE DETAILS :
	// sending the whole details to client :
	@GetMapping("/emplForUpdate/{empId}")
	public User getEmplDetailsFor(@RequestParam  Long empId) {
		
		//
		System.out.println("inside getEmployeeDetails userControler");
		
		//
		return userService.getEmployeeDetails(empId);
	}

	// taking the New Details and adding it into DB.
	@PutMapping
	public ResponseEntity<?> addUpdatedDetails(@RequestBody User user){
		
		//
		System.out.println("inside addUpdatedDetails userControler");
		
		//
		return ResponseEntity.status(HttpStatus.OK).body(userService.updateEmplDetails(user));
	}
	
}
