package com.bch.vedio.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.bch.vedio.security.JWTFilter;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
public class AuthConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private JWTFilter filter;
	 
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
http.formLogin();
		http.csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeRequests()
.antMatchers("/main.js","/polyfills.js","/runtime.js","/styles.js","/vendor.js", 
		"/index.html","/signup", "/", "/home","/signin", "/api/auth","/images/**","/api/users/**")
				.permitAll()

				// Disallow everything else..
				.anyRequest().authenticated();
		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
		// If a user try to access a resource without having enough permissions
		http.exceptionHandling().accessDeniedPage("/");
		 http
         .headers()
         .frameOptions().sameOrigin()  // required to set for H2 else H2 Console will be blank.
         .cacheControl();
http.formLogin().loginPage("/");
	}


}