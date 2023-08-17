package com.app.DTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor

@Getter
@Setter

@ToString
public class ProductDTO {
	private String productName;
	private double price;
	@NotNull(message = "seller id cant be null..")
	private Long sellerId;
	private int quantity;
	@NotNull(message = "category id cant be null..")
	private Long categoryId;
}
