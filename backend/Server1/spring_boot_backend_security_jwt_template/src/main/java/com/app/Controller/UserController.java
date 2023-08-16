package com.app.Controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.ApiResponse;
import com.app.POJOS.User;
import com.app.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	//
	@Autowired
	private UserService userService;
	
	//
	 @PreAuthorize("hasAuthority('user:write')")
	@PostMapping("/addEmpl")
	public ResponseEntity<?> addNewEmployee(@RequestBody User user){
		
		//
		System.out.println("inside userController..  " + user);
		
		//
		ApiResponse responseFromServ = userService.addNewEmployee(user);
		
		//
		return ResponseEntity.status(HttpStatus.CREATED).body(responseFromServ);
	}

}
