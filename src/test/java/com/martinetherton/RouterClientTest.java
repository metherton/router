package com.martinetherton;

import org.junit.Test;

/**
 * Created by martin on 14/02/18.
 */
public class RouterClientTest {

    private RouterClient client = new RouterClient();

    @Test
    public void processRouteRequest() {

        RouteAdvice routeAdvice = client.sendRouteRequest(null);

    }
}
