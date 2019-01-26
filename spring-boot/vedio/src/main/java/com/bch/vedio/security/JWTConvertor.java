package com.bch.vedio.security;

import org.springframework.security.core.Authentication;

public interface JWTConvertor {

	String toJWT(Authentication authentication);
	
	Authentication fromJWT(String token);
}
