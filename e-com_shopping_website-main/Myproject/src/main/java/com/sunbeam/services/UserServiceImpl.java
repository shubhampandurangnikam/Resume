package com.sunbeam.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.UserDao;
import com.sunbeam.entities.User;
@Transactional
@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userdao;

	@Override
	public User findByEmail(String email) {
		
		return userdao.findByEmail(email);
	}

	@Override
	public User authenticate(String email, String password) {
		
		User user = userdao.findByEmail(email);
		if(user!=null && user.getPassword().equals(password)) {
		return user;
		}
		return null;
	}

	@Override
	public User save(User user) {
		
		return userdao.save(user);
	}

	@Override
	public User findById(int id) {
		Optional<User> user = userdao.findById(id);
		return user.orElse(null);
	}

	@Override
	public boolean deleteById(int id) {
		
		if(userdao.existsById(id)) {
			userdao.deleteById(id);
			return true;
		}
		return false;
		
	}

}
