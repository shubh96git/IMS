package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
