package com.app.POJOS;

import java.util.List;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "suppliers")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Supplier extends BaseEntity{

	//
	@Column(length = 30,nullable = false)
	private String name;
	
	//
	@Column(length = 30, unique = true, nullable = false) // =>unique and not null
	private String email;
	
	//
	@Column(length = 10,nullable = false)
	private String mobile;	

}
