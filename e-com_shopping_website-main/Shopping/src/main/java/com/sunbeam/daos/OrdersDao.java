package com.sunbeam.daos;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sunbeam.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Integer>{
	
    List<Orders> findByDateBefore(LocalDateTime today);
	
	List<Orders> findByDateBetween(LocalDateTime d1,LocalDateTime d2);

}
