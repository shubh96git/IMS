package com.app.POJOS;

//
import javax.persistence.*;

//
import lombok.*;

@Entity 
@Table(name = "users") 

@NoArgsConstructor

@Getter
@Setter

@ToString
public class User extends BaseEntity {

	//
	@Column(length = 30,nullable = false)
	private String name;
	
	//
	@Column(length = 30, unique = true, nullable = false) // =>unique and not null
	private String email;
	
	//
	@Column(nullable = false,length = 10) // =>NOT NULL
	private String password;
	
	//
	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
	@Column(name="user_role",length = 10)
	private UserRole userRole;
	
	//
	@Column(length = 10,nullable = false)
	private String mobile;	
		
}
