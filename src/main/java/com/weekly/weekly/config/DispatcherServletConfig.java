package com.weekly.weekly.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
@EnableWebMvc
@EnableAsync
@ComponentScan(basePackages = "com.weekly")
public class DispatcherServletConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);

        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Authorization", "*")
                .exposedHeaders("Custom-Header")
                .allowCredentials(false)
                .maxAge(3600);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/assets").resourceChain(true);
        registry.addResourceHandler("/vite.svg").addResourceLocations("classpath:/static/assets").resourceChain(true);
        registry.addResourceHandler("/**").addResourceLocations("classpath:/templates/");
        registry.addResourceHandler("/**").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/static/assets");
    }

}
