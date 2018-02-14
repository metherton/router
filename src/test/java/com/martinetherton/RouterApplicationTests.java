package com.martinetherton;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RouterApplicationTests {

	@Autowired
	private WebApplicationContext wac;

	@Test
	public void contextLoads() {
	}

	private MockMvc mockMvc;

	@Before
	public void setUp() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	@Test
	public void shouldReturn200Ok() throws Exception {
		ResultActions bla = mockMvc.perform(get("/routeAdvices/44.5_-36.0/106.0_-17.5"));
		mockMvc.perform(get("/routeAdvices/44.5_-36.0/106.0_-17.5")).andExpect(status().isOk());
	}

}
