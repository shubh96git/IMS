package com.app.POJOS;

import javax.persistence.*;

import lombok.*;


@NoArgsConstructor

@Getter
@Setter

@ToString
@Entity
@Table(name="sub_sub_categories")
public class SubSubCategory extends BaseEntity{
	
	// id
	
	// name
	@Column(name="name",length = 20,unique = true)
	private String subSubCatName;

}
