package com.lxisoft.chaitime.web.rest;
import com.lxisoft.chaitime.domain.Seller;
import com.lxisoft.chaitime.repository.SellerRepository;
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
 * REST controller for managing Seller.
 */
@RestController
@RequestMapping("/apis")
public class SellerResource {

    private final Logger log = LoggerFactory.getLogger(SellerResource.class);

    private static final String ENTITY_NAME = "seller";

    private final SellerRepository sellerRepository;

    public SellerResource(SellerRepository sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    /**
     * POST  /sellers : Create a new seller.
     *
     * @param seller the seller to create
     * @return the ResponseEntity with status 201 (Created) and with body the new seller, or with status 400 (Bad Request) if the seller has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/sellers")
    public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) throws URISyntaxException {
        log.debug("REST request to save Seller : {}", seller);
        if (seller.getId() != null) {
            throw new BadRequestAlertException("A new seller cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Seller result = sellerRepository.save(seller);
        return ResponseEntity.created(new URI("/api/sellers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /sellers : Updates an existing seller.
     *
     * @param seller the seller to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated seller,
     * or with status 400 (Bad Request) if the seller is not valid,
     * or with status 500 (Internal Server Error) if the seller couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/sellers")
    public ResponseEntity<Seller> updateSeller(@RequestBody Seller seller) throws URISyntaxException {
        log.debug("REST request to update Seller : {}", seller);
        if (seller.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Seller result = sellerRepository.save(seller);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, seller.getId().toString()))
            .body(result);
    }

    /**
     * GET  /sellers : get all the sellers.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of sellers in body
     */
    @GetMapping("/sellers")
    public List<Seller> getAllSellers() {
        log.debug("REST request to get all Sellers");
        return sellerRepository.findAll();
    }

    /**
     * GET  /sellers/:id : get the "id" seller.
     *
     * @param id the id of the seller to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the seller, or with status 404 (Not Found)
     */
    @GetMapping("/sellers/{id}")
    public ResponseEntity<Seller> getSeller(@PathVariable Long id) {
        log.debug("REST request to get Seller : {}", id);
        Optional<Seller> seller = sellerRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(seller);
    }

    /**
     * DELETE  /sellers/:id : delete the "id" seller.
     *
     * @param id the id of the seller to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/sellers/{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long id) {
        log.debug("REST request to delete Seller : {}", id);
        sellerRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
