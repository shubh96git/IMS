package com.app.POJOS;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="products")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Product extends BaseEntity{

	// id
	
	//
	@Column(name="product_name",length = 30,nullable = false)
	private String productName;
	
	//
	@Column(nullable = false) 
	private double price;
	
	//
	@ManyToOne
	@JoinColumn(name="seller_id") // =>NOT NULL
	private Supplier sellerId;
	
	//
	@Column
	private int quantity;
	
	//
	@Enumerated(EnumType.STRING)
	@Column
	private Status status;
	
	//
	@ManyToOne
	@JoinColumn(name = "category_id")
	private SubSubCategory productId;
}
