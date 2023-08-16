package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.POJOS.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	// register the employee : save API

}
