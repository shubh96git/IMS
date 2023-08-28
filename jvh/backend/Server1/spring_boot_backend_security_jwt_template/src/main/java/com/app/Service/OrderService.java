package com.app.Service;

import com.app.DTO.ApiResponse;

public interface OrderService {

	//
	ApiResponse confirmPayment(Long userId);
}
