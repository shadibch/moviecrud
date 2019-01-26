package com.bch.vedio.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class JWTConvertorImpl implements JWTConvertor {
	private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	@Override
	public String toJWT(Authentication authentication) {
		
		List<String> roles = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
		String jws = Jwts.builder().setSubject(authentication.getName()).claim("roles", roles).signWith(key).compact();
		return jws;
	}

	@Override
	public Authentication fromJWT(String token) {
		Claims claims =  Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
		String subject = claims.getSubject();
		List<String> roles = (List<String>)claims.get("roles");
		 List<GrantedAuthority> authorityList =roles.stream().map(r->new SimpleGrantedAuthority(r)).collect(Collectors.toList());
		 UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(subject, token,authorityList);		 
	        return authentication;	    
	}

}
