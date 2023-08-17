package com.app.DTO;

import java.io.Serializable;

import com.app.POJOS.UserRole;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
	
	private String fName;
	private String lName;
	private String email;
	private String mobile;	
}
