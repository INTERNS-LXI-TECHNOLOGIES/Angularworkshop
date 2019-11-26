package com.lxisoft.chaitime.repository;

import com.lxisoft.chaitime.domain.Beverage;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Beverage entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BeverageRepository extends JpaRepository<Beverage, Long> {

}
