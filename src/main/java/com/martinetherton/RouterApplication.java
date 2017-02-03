package com.martinetherton;

import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdvice;
import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdviceRequest;
import com.bmtargoss.semafors.optimizer.domain.OptimizerServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

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

	public static void main(String[] args) {
		SpringApplication.run(RouterApplication.class, args);
	}
}
