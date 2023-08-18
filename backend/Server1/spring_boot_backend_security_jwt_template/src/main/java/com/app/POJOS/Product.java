package com.app.POJOS;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
	@Range(min=0)
	private double price;
	
	//
	@ManyToOne
	@JoinColumn(name="seller_id") 
	private Supplier seller;
	
	//
	@Column
	@Range(min=1)
	private int quantity;
	
	//
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ProductStatus status;
	
	//
	@ManyToOne
	@JoinColumn(name = "category_id")
	private SubSubCategory category;
}
