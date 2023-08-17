package com.app.POJOS;

import javax.persistence.Column;
import javax.persistence.Entity;
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
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="seller_id") // =>NOT NULL
	@JsonProperty(access = Access.READ_ONLY)
	private Supplier sellerId;
	
	//
	@Column
	@Range(min=1)
	private int quantity;
	
	//
	@ManyToOne
	@JoinColumn(name = "category_id")
	private SubSubCategory categoryId;
}
