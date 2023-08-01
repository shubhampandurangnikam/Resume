package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Products;
import com.sunbeam.entities.User;


public interface ProductDao extends JpaRepository<Products, Integer>{
	List<Products> findByProductname(String productname);
	List<Products> findByBrand(String brand);
	List<Products> findByCategoryid(int categoryid);
	

}
