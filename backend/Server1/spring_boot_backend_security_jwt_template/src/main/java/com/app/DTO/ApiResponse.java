package com.app.DTO;

import java.time.LocalDateTime;

import lombok.*;

@NoArgsConstructor
@Getter
@Setter

// Generic response from the server.
public class ApiResponse {

	private String message;
	private LocalDateTime timestamp;

	public ApiResponse(String message) {
		this.message = message;
		this.timestamp = LocalDateTime.now();

	}
}


