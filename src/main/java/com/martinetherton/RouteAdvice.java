package com.martinetherton;

import java.util.List;

/**
 * Created by martin on 02/02/17.
 */
public class RouteAdvice {
    private List<String> waypoints;
    private int timeDuration;
    private int fuelCost;
    private int timeCost;
    private int pathCost;

    public void setWaypoints(List<String> waypoints) {
        this.waypoints = waypoints;
    }

    public List<String> getWaypoints() {
        return waypoints;
    }

    public void setTimeDuration(int timeDuration) {
        this.timeDuration = timeDuration;
    }

    public int getTimeDuration() {
        return timeDuration;
    }

    public void setFuelCost(int fuelCost) {
        this.fuelCost = fuelCost;
    }

    public int getFuelCost() {
        return fuelCost;
    }

    public void setTimeCost(int timeCost) {
        this.timeCost = timeCost;
    }

    public int getTimeCost() {
        return timeCost;
    }

    public void setPathCost(int pathCost) {
        this.pathCost = pathCost;
    }

    public int getPathCost() {
        return pathCost;
    }
}
