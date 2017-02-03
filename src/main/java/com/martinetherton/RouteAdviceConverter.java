package com.martinetherton;

import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdvice;

/**
 * Created by martin on 02/02/17.
 */
public class RouteAdviceConverter {
    private RouteAdvice routeAdvice;

    public RouteAdviceConverter(OptimalRouteAdvice optimalRouteAdvice) {
        routeAdvice = new RouteAdvice();
        routeAdvice.setWaypoints(optimalRouteAdvice.waypoints());
        routeAdvice.setTimeDuration(optimalRouteAdvice.timeDuration());
        routeAdvice.setFuelCost(optimalRouteAdvice.fuelCost());
        routeAdvice.setTimeCost(optimalRouteAdvice.timeCost());
        routeAdvice.setPathCost(optimalRouteAdvice.pathCost());
    }

    public RouteAdvice getRouteAdvice() {
        return routeAdvice;
    }
}
