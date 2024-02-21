package tn.esprit.forum.Aspect;


import java.lang.reflect.Method;
import java.util.stream.IntStream;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;




@Component
@Aspect
public class LoggingAPIAspect {

    Logger logger = LoggerFactory.getLogger(LoggingAPIAspect.class);


    @Before(value = "@annotation(tn.esprit.forum.Aspect.LoggingAPI)")
    public void printInput(JoinPoint p)  {

        //Initialization
        MethodSignature signature = (MethodSignature) p.getSignature();
        Method method = signature.getMethod();
        LoggingAPI annotation = method.getAnnotation(LoggingAPI.class);




        //Default display

        logger.info("Starting : " + signature.getDeclaringTypeName()+" " +signature.getName());

        //If input is true
        boolean input =annotation.input();
        if (input)
        {

            IntStream.range(0,p.getArgs().length)
                    .forEach(i -> logger.info("arg name :"+signature.getParameterNames()[i]+" arg value:"+p.getArgs()[i]));

        }

    }


    @Around(value = "@annotation(tn.esprit.forum.Aspect.LoggingAPI)")
    public Object printOutput (ProceedingJoinPoint joinpoint) throws Throwable {

        MethodSignature signature = (MethodSignature) joinpoint.getSignature();
        Method method = signature.getMethod();
        LoggingAPI annotation = method.getAnnotation(LoggingAPI.class);

        try
        {

            Object res = joinpoint.proceed();
            boolean output =annotation.output();
            if (output)
            {
                logger.info("res = "+res);
            }

            return res;
        }finally {
            logger.info("Finishing: "+signature.getDeclaringTypeName()+" " +signature.getName());
        }



    }

}
