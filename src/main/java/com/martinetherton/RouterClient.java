package com.martinetherton;

import org.springframework.web.client.RestTemplate;

import java.net.URI;

/**
 * Created by martin on 14/02/18.
 */
public class RouterClient {

    private static final String BASE_URI = "http://localhost:8080/routeAdvices/114.5_22.0/-73.5_40.0";

    private final RestTemplate restTemplate = new RestTemplate();
//    private final Log log = LogFactory.getLog(getClass());

    public RouteAdvice sendRouteRequest(Object routeRequest) {
        RouteAdvice routeAdvice = restTemplate.getForObject(BASE_URI, RouteAdvice.class);
     //   log.debug("Received location of newly created reward: " + location);
      //  Reward reward = restTemplate.getForObject(location, Reward.class);
      //  log.debug("Received reward: " + toString(reward));

       // return reward;
        return routeAdvice;
    }

//    private String toString(Reward reward) {
//        if (reward == null) return null;
//        return String.format("confirmation no.: %s, account no.: %s, reward: %.2f",
//                reward.getConfirmationNumber(),
//                reward.getAccountNumber(),
//                reward.getRewardAmount()
//        );
//    }

}
