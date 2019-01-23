package com.bch.vedio.listener;

import java.util.Date;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.bch.vedio.entity.Movie;

public class MovieListener {
	@PrePersist
	@PreUpdate
	public void update(Movie movie) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentPrincipalName = authentication.getName();
		movie.setCreatorUser(currentPrincipalName);
		movie.setCreatorDate(new Date());
	}
}
