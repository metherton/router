package com.martinetherton;

import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdvice;
import com.bmtargoss.semafors.optimizer.domain.OptimalRouteAdviceRequest;
import com.bmtargoss.semafors.optimizer.domain.OptimizerService;
import com.bmtargoss.semafors.optimizer.domain.OptimizerServiceImpl;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

/**
 * Created by martin on 02/02/17.
 */
public class OptimizerImplTest {

    private OptimizerService optimizer;

    @Before
    public void setUp() {
        optimizer = new OptimizerServiceImpl();
    }

    @Test
    public void optimizerShouldReturnOptimalRouteAdvice() {
        OptimalRouteAdviceRequest optimalRouteAdviceRequest = new OptimalRouteAdviceRequest("44.5_-36.0", "106.0_-17.5");
        OptimalRouteAdvice optimalRouteAdvice = optimizer.findRouteAdviceFor(optimalRouteAdviceRequest);
    }

}
