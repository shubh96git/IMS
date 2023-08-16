package com.app.POJOS;

import java.time.LocalDate;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="purchases")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Purchase extends BaseEntity {

	// id
	
	//
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User userId;
	
	//
	@Column(name="order_date")
	private LocalDate orderDate;
	
	//
	@Column(name="delivery_date")
	private LocalDate deliveryDate;
}
