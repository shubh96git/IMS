package com.app.POJOS;

import java.io.Serializable;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "remarks") 
@NoArgsConstructor
@Getter
@Setter
public class Remarks implements Serializable{
  
  @Id
  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;
  
  @Id
  @ManyToOne
  @JoinColumn(name = "product_id")
  private Product product;
  
  @Column(length = 150)
  private String review;
  
  @Column
  private int rating;
}