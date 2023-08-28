package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {


}
