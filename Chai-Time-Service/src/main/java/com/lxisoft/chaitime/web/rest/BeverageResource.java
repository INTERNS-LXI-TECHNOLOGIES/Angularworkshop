package com.lxisoft.chaitime.web.rest;
import com.lxisoft.chaitime.domain.Beverage;
import com.lxisoft.chaitime.repository.BeverageRepository;
import com.lxisoft.chaitime.web.rest.errors.BadRequestAlertException;
import com.lxisoft.chaitime.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Beverage.
 */
@RestController
@RequestMapping("/api")
public class BeverageResource {

    private final Logger log = LoggerFactory.getLogger(BeverageResource.class);

    private static final String ENTITY_NAME = "beverage";

    private final BeverageRepository beverageRepository;

    public BeverageResource(BeverageRepository beverageRepository) {
        this.beverageRepository = beverageRepository;
    }

    /**
     * POST  /beverages : Create a new beverage.
     *
     * @param beverage the beverage to create
     * @return the ResponseEntity with status 201 (Created) and with body the new beverage, or with status 400 (Bad Request) if the beverage has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/beverages")
    public ResponseEntity<Beverage> createBeverage(@RequestBody Beverage beverage) throws URISyntaxException {
        log.debug("REST request to save Beverage : {}", beverage);
        if (beverage.getId() != null) {
            throw new BadRequestAlertException("A new beverage cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Beverage result = beverageRepository.save(beverage);
        return ResponseEntity.created(new URI("/api/beverages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /beverages : Updates an existing beverage.
     *
     * @param beverage the beverage to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated beverage,
     * or with status 400 (Bad Request) if the beverage is not valid,
     * or with status 500 (Internal Server Error) if the beverage couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/beverages")
    public ResponseEntity<Beverage> updateBeverage(@RequestBody Beverage beverage) throws URISyntaxException {
        log.debug("REST request to update Beverage : {}", beverage);
        if (beverage.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Beverage result = beverageRepository.save(beverage);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, beverage.getId().toString()))
            .body(result);
    }

    /**
     * GET  /beverages : get all the beverages.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of beverages in body
     */
    @GetMapping("/beverages")
    public List<Beverage> getAllBeverages() {
        log.debug("REST request to get all Beverages");
        return beverageRepository.findAll();
    }

    /**
     * GET  /beverages/:id : get the "id" beverage.
     *
     * @param id the id of the beverage to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the beverage, or with status 404 (Not Found)
     */
    @GetMapping("/beverages/{id}")
    public ResponseEntity<Beverage> getBeverage(@PathVariable Long id) {
        log.debug("REST request to get Beverage : {}", id);
        Optional<Beverage> beverage = beverageRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(beverage);
    }

    /**
     * DELETE  /beverages/:id : delete the "id" beverage.
     *
     * @param id the id of the beverage to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/beverages/{id}")
    public ResponseEntity<Void> deleteBeverage(@PathVariable Long id) {
        log.debug("REST request to delete Beverage : {}", id);
        beverageRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
