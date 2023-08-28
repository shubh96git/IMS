package com.app.DTO;

import java.io.Serializable;

import com.app.POJOS.UserRole;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
	
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;	
}
