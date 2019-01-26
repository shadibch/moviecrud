package com.bch.vedio.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bch.vedio.repositories.UserRepository;
@Service
public class UserDetailsImpl implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		return userRepository.findByUsername(username).map(u->new UserModel(u)).orElseThrow(()->new UsernameNotFoundException("User " + username + " not found"));
	}

}
