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
	private Long id;
	private String productName;
	private double price;
	private int quantity;
	private int[] prodImageIds;
	@NotNull(message = "seller id cant be null..")
	private Long sellerId;
	@NotNull(message = "category id cant be null..")
	private Long categoryId;
}
