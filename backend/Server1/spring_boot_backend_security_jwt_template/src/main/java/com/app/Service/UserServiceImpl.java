package com.app.Service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.ApiResponse;
import com.app.POJOS.User;
import com.app.Repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	//
	@Autowired
	private UserRepository userRepos;
	
	//
	@Override
	public ApiResponse addNewEmployee(User user) {

		//
		System.out.println("inside userService..");
		
		//
		userRepos.save(user);
		
		//
		return new ApiResponse("Employee Added successfully..");
	}
	
	//
	

}
