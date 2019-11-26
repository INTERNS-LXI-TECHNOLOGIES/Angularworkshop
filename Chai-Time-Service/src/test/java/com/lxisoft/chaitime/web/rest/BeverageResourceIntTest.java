package com.lxisoft.chaitime.web.rest;

import com.lxisoft.chaitime.ChaiTimeApp;

import com.lxisoft.chaitime.domain.Beverage;
import com.lxisoft.chaitime.repository.BeverageRepository;
import com.lxisoft.chaitime.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;


import static com.lxisoft.chaitime.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the BeverageResource REST controller.
 *
 * @see BeverageResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ChaiTimeApp.class)
public class BeverageResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final Long DEFAULT_PRICE = 1L;
    private static final Long UPDATED_PRICE = 2L;

    @Autowired
    private BeverageRepository beverageRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restBeverageMockMvc;

    private Beverage beverage;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final BeverageResource beverageResource = new BeverageResource(beverageRepository);
        this.restBeverageMockMvc = MockMvcBuilders.standaloneSetup(beverageResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Beverage createEntity(EntityManager em) {
        Beverage beverage = new Beverage()
            .name(DEFAULT_NAME)
            .price(DEFAULT_PRICE);
        return beverage;
    }

    @Before
    public void initTest() {
        beverage = createEntity(em);
    }

    @Test
    @Transactional
    public void createBeverage() throws Exception {
        int databaseSizeBeforeCreate = beverageRepository.findAll().size();

        // Create the Beverage
        restBeverageMockMvc.perform(post("/api/beverages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(beverage)))
            .andExpect(status().isCreated());

        // Validate the Beverage in the database
        List<Beverage> beverageList = beverageRepository.findAll();
        assertThat(beverageList).hasSize(databaseSizeBeforeCreate + 1);
        Beverage testBeverage = beverageList.get(beverageList.size() - 1);
        assertThat(testBeverage.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testBeverage.getPrice()).isEqualTo(DEFAULT_PRICE);
    }

    @Test
    @Transactional
    public void createBeverageWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = beverageRepository.findAll().size();

        // Create the Beverage with an existing ID
        beverage.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restBeverageMockMvc.perform(post("/api/beverages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(beverage)))
            .andExpect(status().isBadRequest());

        // Validate the Beverage in the database
        List<Beverage> beverageList = beverageRepository.findAll();
        assertThat(beverageList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllBeverages() throws Exception {
        // Initialize the database
        beverageRepository.saveAndFlush(beverage);

        // Get all the beverageList
        restBeverageMockMvc.perform(get("/api/beverages?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(beverage.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].price").value(hasItem(DEFAULT_PRICE.intValue())));
    }
    
    @Test
    @Transactional
    public void getBeverage() throws Exception {
        // Initialize the database
        beverageRepository.saveAndFlush(beverage);

        // Get the beverage
        restBeverageMockMvc.perform(get("/api/beverages/{id}", beverage.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(beverage.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.price").value(DEFAULT_PRICE.intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingBeverage() throws Exception {
        // Get the beverage
        restBeverageMockMvc.perform(get("/api/beverages/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateBeverage() throws Exception {
        // Initialize the database
        beverageRepository.saveAndFlush(beverage);

        int databaseSizeBeforeUpdate = beverageRepository.findAll().size();

        // Update the beverage
        Beverage updatedBeverage = beverageRepository.findById(beverage.getId()).get();
        // Disconnect from session so that the updates on updatedBeverage are not directly saved in db
        em.detach(updatedBeverage);
        updatedBeverage
            .name(UPDATED_NAME)
            .price(UPDATED_PRICE);

        restBeverageMockMvc.perform(put("/api/beverages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedBeverage)))
            .andExpect(status().isOk());

        // Validate the Beverage in the database
        List<Beverage> beverageList = beverageRepository.findAll();
        assertThat(beverageList).hasSize(databaseSizeBeforeUpdate);
        Beverage testBeverage = beverageList.get(beverageList.size() - 1);
        assertThat(testBeverage.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testBeverage.getPrice()).isEqualTo(UPDATED_PRICE);
    }

    @Test
    @Transactional
    public void updateNonExistingBeverage() throws Exception {
        int databaseSizeBeforeUpdate = beverageRepository.findAll().size();

        // Create the Beverage

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restBeverageMockMvc.perform(put("/api/beverages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(beverage)))
            .andExpect(status().isBadRequest());

        // Validate the Beverage in the database
        List<Beverage> beverageList = beverageRepository.findAll();
        assertThat(beverageList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteBeverage() throws Exception {
        // Initialize the database
        beverageRepository.saveAndFlush(beverage);

        int databaseSizeBeforeDelete = beverageRepository.findAll().size();

        // Delete the beverage
        restBeverageMockMvc.perform(delete("/api/beverages/{id}", beverage.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Beverage> beverageList = beverageRepository.findAll();
        assertThat(beverageList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Beverage.class);
        Beverage beverage1 = new Beverage();
        beverage1.setId(1L);
        Beverage beverage2 = new Beverage();
        beverage2.setId(beverage1.getId());
        assertThat(beverage1).isEqualTo(beverage2);
        beverage2.setId(2L);
        assertThat(beverage1).isNotEqualTo(beverage2);
        beverage1.setId(null);
        assertThat(beverage1).isNotEqualTo(beverage2);
    }
}
