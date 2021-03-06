package com.martinetherton;

import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdvice;
import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdviceRequest;
import com.bmtargoss.semafors.optimizer.domain.OptimizerServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.Filter;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@ComponentScan
@SpringBootApplication
@RestController
public class RouterApplication {

    @RequestMapping("/resource")
    public Map<String,Object> home() {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

    @RequestMapping(value="/routeAdvices/{start}/{destination}", method= RequestMethod.GET)
    public RouteAdvice getOptimalRouteAdvice(@PathVariable("start") String start, @PathVariable("destination") String destination) {
        OptimalRouteAdviceRequest optimalRouteAdviceRequest = new OptimalRouteAdviceRequest(start, destination);
        OptimalRouteAdvice optimalRouteAdvice = (new OptimizerServiceImpl()).findRouteAdviceFor(optimalRouteAdviceRequest);
        return (new RouteAdviceConverter(optimalRouteAdvice)).getRouteAdvice();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/routeAdvices/**").allowedOrigins("*");
            }
        };
    }

//    @Bean
//    public FilterRegistrationBean someFilterRegistration() {
//        FilterRegistrationBean registration = new FilterRegistrationBean();
//        registration.setFilter(NginxFilter());
//     //   registration.addUrlPatterns("/*");
//      //  registration.setEnabled(Boolean.TRUE);
////        registration.addInitParameter("paramName", "paramValue");
//    //    registration.setName("NginxFilter");
//        registration.setOrder(1);
//        return registration;
//    }

//    @Bean(name = "NginxFilter")
//    public Filter NginxFilter() {
//        return new NginxFilter();
//    }

	public static void main(String[] args) {
		SpringApplication.run(RouterApplication.class, args);
	}
}
