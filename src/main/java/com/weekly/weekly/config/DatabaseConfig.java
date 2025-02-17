package com.weekly.weekly.config;

import com.zaxxer.hikari.HikariDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.sql.DataSource;
import java.util.Properties;



@Configuration
@EnableJpaRepositories(
        basePackages = {
                "com.weekly.weekly.data.repository",
        },
        entityManagerFactoryRef = "weeklyEm",
        transactionManagerRef = "weeklyTm"
)
@EntityScan(basePackages = "com.weekly.weekly.data.domain")
public class DatabaseConfig {
        private static final Logger log = LoggerFactory.getLogger(DatabaseConfig.class);

        @Value("${spring.datasource.hikari.jdbc-url}")
        String jdbcUrl;
        @Value("${spring.datasource.username}")
        String userName;
        @Value("${spring.datasource.password}")
        String password;
        @Value("${spring.datasource.driver-class-name}")
        String driverName;
        @Value("${spring.datasource.dialect}")
        private String dialect;
        @Value("${spring.datasource.hikari.maximum-pool-size}")
        private String maxPoolSize;
        @Value("${spring.datasource.hikari.connection-timeout}")
        private String connectionTimeout;

        @Primary
        @Bean(name = "weekly")
        public DataSource dataSource(){
                HikariDataSource hikariDataSource = new HikariDataSource();
                hikariDataSource.setJdbcUrl(jdbcUrl);
                hikariDataSource.setDriverClassName(driverName);
                hikariDataSource.setUsername(userName);
                hikariDataSource.setPassword(password);
                hikariDataSource.setMaximumPoolSize(Integer.parseInt(maxPoolSize));
                hikariDataSource.setConnectionTimeout(Long.parseLong(connectionTimeout));
                hikariDataSource.setDataSourceProperties(jpaHibernateProperties());

                log.info("####################################################################################################################");
                log.info("## Weekly PRIMARY DataSource Info.");
                log.info("Driver   : {}", driverName);
                log.info("URL      : {}", jdbcUrl);
                log.info("USERNAME : {}", userName);
                log.info("PASSWORD : {}", password);
                log.info("####################################################################################################################");

                return hikariDataSource;
        }

        private Properties jpaHibernateProperties() {
                Properties props = new Properties();
                props.setProperty("hibernate.show_sql", "false");
                props.setProperty("hibernate.format_sql", "true");
                props.setProperty("hibernate.jdbc.time_zone","Asia/Seoul");
                props.setProperty("hibernate.dialect", dialect);
                props.setProperty("hibernate.c3p0.max_size", maxPoolSize);
                props.setProperty("hibernate.c3p0.timeout", connectionTimeout);
                return props;
        }

        @Primary
        @Bean(name = "weeklyTm")
        public JpaTransactionManager jpaTransactionManager(@Qualifier("weeklyEm") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
                JpaTransactionManager transactionManager = new JpaTransactionManager();
                transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
                return transactionManager;
        }

        @Primary
        @Bean(name = "weeklyEm")
        public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(
                EntityManagerFactoryBuilder builder,
                @Qualifier("weekly") DataSource ds) {
                LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
                HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
                jpaVendorAdapter.setShowSql(false);
                factoryBean.setJpaVendorAdapter(jpaVendorAdapter);
                factoryBean.setDataSource(ds);
                factoryBean.setPackagesToScan(
                        "com.weekly.weekly.data.dto",
                        "com.weekly.weekly.data.domain"
                );
                factoryBean.setJpaProperties(jpaHibernateProperties());
                return factoryBean;
        }

}
