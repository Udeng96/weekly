package com.weekly.weekly.config.constant;


import java.util.Arrays;
import java.util.List;

public class ApiConstants {

    public static class Common {
        public static final String ENCODING = "UTF-8";
        public static final String API_PRODUCES = "application/json;charset=utf8";
        public static final String TIME_ZONE = "Asia/Seoul";
        public static final String STR_SPLIT = "_";
    }


    public static class Result {
        public static final String SUCCESS_CODE = "SUCCESS";
        public static final String SUCCESS_STATUS = "200";
        public static final String OMS_SUCCESS_CODE = "OK";
        public static final String FAIL_CODE = "FAIL";
        public static final String SUCCESS_MESSAGE = "정상 처리되었습니다.";
        public static final String FAIL_MESSAGE = "불러온 데이터가 없거나 정상적인 호출이 되지 않았습니다.";
        public static final String FAIL_NO_AUTH = "권한이 없거나, 접속정보가 올바르지않습니다.";
    }

    public static class DATE {
        public static final String FORMAT_4 = "yyyy";
        public static final String FORMAT_6 = "yyyyMM";
        public static final String FORMAT_8 = "yyyyMMdd";
        public static final String FORMAT_10 = "yyyyMMddHH";
        public static final String FORMAT_12 = "yyyyMMddHHmm";
        public static final String FORMAT_14 = "yyyyMMddHHmmss";
        public static final String FORMAT_17 = "yyyyMMddHHmmssSSS";
        public static final String FORMAT_FRONT = "yyyy-MM-dd HH:mm:ss";
        public static final String MILLISECOND_ONE_FORMAT = "yyyy-MM-dd HH:mm:ss";
        public static final String MILLISECOND_FULL_FORMAT = "yyyy-MM-dd HH:mm:ss.SSS";
        public static final String YEAR_TO_MINUTE_FORMAT = "yyyy-MM-dd HH:mm";
        public static final String DTM_TXT_FORMAT_8 = "yyyy/MM/dd";
        public static final String HOUR_MINUTE_FORMAT = "HHmm";
        public static final String HOUR_FORMAT = "HH";
        public static final String STAT_D = "MM-dd";
        public static final String STAT_M = "yyyy-MM";
        public static final String STAT_Y = "yyyy";
    }

    public static class OPER_STAT_TYPE {
        public static final String HOURLY = "hourly";
        public static final String DAILY = "daily";
        public static final String MONTHLY = "monthly";
    }

}


