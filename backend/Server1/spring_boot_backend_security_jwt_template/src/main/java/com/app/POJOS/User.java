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
@EqualsAndHashCode(callSuper = false, doNotUseGetters = true,of = "email")
public class User extends BaseEntity {

	//
	@Column(length = 30)
	private String name;
	
	//
	@Column(length = 30, unique = true) // =>unique and not null
	private String email;
	
	//
	@Column(nullable = false,length = 10) // =>NOT NULL
	private String password;
	
	//
	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
	@Column(name="user_role",length = 10)
	private UserRole userRole;
	
	//
	@Column(length = 10)
	private String mobile;	
		
}
