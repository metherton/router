package com.martinetherton;

import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdvice;
import org.junit.Test;

/**
 * Created by martin on 02/02/17.
 */
public class RouteAdviceConverterTest {

    @Test
    public void shouldConvertOptimalRouteAdviceToRouteAdvice() {

        OptimalRouteAdvice optimalRouteAdvice = new OptimalRouteAdvice(null, 0, 0, 0, 0);
        RouteAdviceConverter converter = new RouteAdviceConverter(optimalRouteAdvice);
        RouteAdvice routeAdvice = converter.getRouteAdvice();
    }
}
