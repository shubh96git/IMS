package com.app.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class Home {

	@GetMapping
	public String Hello() {
		return "Hello Sudha";
	}
}
