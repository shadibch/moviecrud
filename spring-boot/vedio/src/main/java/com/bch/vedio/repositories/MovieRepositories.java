package com.bch.vedio.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.bch.vedio.entity.Movie;

public interface MovieRepositories extends CrudRepository<Movie, Long> {
	@RestResource(path = "category", rel = "category")
	Page<Movie> findByCategory(@Param("category")  String category , Pageable pagable);

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(Movie movie) ;

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll() ;

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends Movie> iter) ;

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id) ;
	
	

}
