package com.app.POJOS;

import javax.persistence.*;

import lombok.*;

@MappedSuperclass
@Getter
@Setter
public class BaseEntity {

	//
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
}
