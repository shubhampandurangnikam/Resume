package com.sunbeam.services;

import com.sunbeam.entities.User;

public interface UserService {
	User findByEmail(String email);
	User authenticate(String email, String password);
	User save(User user);
	User findById(int id);
	boolean deleteById(int id);
}
