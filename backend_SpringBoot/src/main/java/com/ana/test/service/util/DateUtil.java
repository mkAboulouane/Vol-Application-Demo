package com.ana.test.service.util;


import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.Locale;
import java.util.Calendar;
import java.util.GregorianCalendar;


public class DateUtil {

    public static final String DEFAULT_DATE_FORMAT = "dd/MM/yyyy";
    public static final String DATE_TIME_FORMAT = "dd/MM/yyyy HH:mm:ss";
    public static final String DATE_FORMAT_WITH_HOUR = "dd/MM/yyyy HH:mm";
    public static final String DATE_FORMAT_NAME = "ddMMyyyyHHmmss";
    public final static String DATE_FORMAT_FILE = "yyMMddHHmmss";
    public static final String HOUR_FORMAT = "HH:mm:ss";
    public static final String DATE_FORMAT_ENG = "EEE MMM dd yyyy HH:mm:ss 'GMT'z";
    public static final String DATE_FORMAT_PF = "EEE MMM dd HH:mm:ss z yyyy";
    public static final long ONE_HOUR = 60 * 60 * 1000L;


    public static Calendar dateToCalendar(final Date date) {
        if (date != null) {
            Calendar cal = new GregorianCalendar();
            cal.setTime(date);
            return cal;
        }
        return null;
    }

    public static LocalDateTime addDaysToDate(LocalDateTime date, long days) {
        if (date != null)
            return date.plusDays(days);
        return null;
    }

    public static long daysBetween(Date d1, Date d2) {
        return ((d2.getTime() - d1.getTime() + ONE_HOUR) / (ONE_HOUR * 24));
    }

    public static LocalDateTime stringEnToDate(final String strDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_ENG, Locale.ENGLISH);
        return LocalDateTime.parse(strDate, formatter);

    }

    public static String getCurrentDate() {
        return dateToString(LocalDate.now());
    }

    public static String getCurrentDateTime() {
        return dateTimeToString(LocalDateTime.now());
    }



    public static LocalDateTime stringTextToDate(final String strDate) {
        if (StringUtils.hasLength(strDate)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_PF, Locale.US);
            return LocalDateTime.parse(strDate, formatter);
        }

        return null;
    }

    public static Timestamp stringToTimestamp(final String strDate) {
        if (StringUtils.hasLength(strDate)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT);
            return new Timestamp(
                    LocalDateTime.parse(strDate, formatter).atZone(ZoneId.systemDefault()).toInstant().toEpochMilli());
        }
        return null;
    }

    public static String dateFormatFichier() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_FILE);
        return LocalDateTime.now().format(formatter);
    }

    public static Long stringToLongTime(final String strDate) {
        if (StringUtils.hasLength(strDate)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT);
            return LocalDateTime.parse(strDate, formatter).atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
        }
        return null;
    }

    public static String dateToString(final LocalDate date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT);
            return date.format(formatter);
        }
        return "";
    }

    public static String dateToString(final LocalDateTime date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT);
            return date.format(formatter);
        }
        return "";
    }

    public static String dateTimeToString(final LocalDateTime date) {
        try {
            if (date != null) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_WITH_HOUR);
                return date.format(formatter);
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }

    public static String dateTimeToString(final LocalDate date) {
        try {
            if (date != null) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_WITH_HOUR);
                return date.format(formatter);
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }

    public static String dateToStringWithHour(final LocalDateTime date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_WITH_HOUR);
            return date.format(formatter);
        }
        return "";
    }

    public static String dateToStringWithHour(final Long d) {
        if (d != null && d != 0) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_WITH_HOUR);
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(d), ZoneId.systemDefault());
            return date.format(formatter);
        }
        return "";
    }

    public static String timesTimpToStringWithHour(final Timestamp d) {
        if (d != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_TIME_FORMAT);
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(d.getTime()), ZoneId.systemDefault());
            return date.format(formatter);
        }
        return "";
    }

    public static String timesTimpToStringWithHour(final Long d) {
        if (d != null) {
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(d), ZoneId.systemDefault());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_TIME_FORMAT);
            return date.format(formatter);
        }
        return "";
    }

    public static String timesTimpToStringWithHourName(final Timestamp d) {
        if (d != null) {
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(d.getTime()), ZoneId.systemDefault());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_NAME);
            return date.format(formatter);
        }
        return "";
    }

    public static String timesTimpToHour(final Timestamp d) {
        if (d != null) {
            LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(d.getTime()), ZoneId.systemDefault());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(HOUR_FORMAT);
            return date.format(formatter);
        }
        return "";
    }

    public static Timestamp StringToTimesTimpWithHour(final String date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_TIME_FORMAT);
            return new Timestamp(
                    LocalDateTime.parse(date, formatter).atZone(ZoneId.systemDefault()).toInstant().toEpochMilli());

        }
        return null;
    }

    public static Calendar getCalendar(Date date) {
        Calendar cal = Calendar.getInstance(Locale.US);
        cal.setTime(date);
        return cal;
    }
    public static String formateDate(Date date) {
        return formateDate("yyyy-MM-dd HH:mm:ss", date);
    }
    public static String formateDateFr(Date date) {
        return formateDate("dd-MM-yyyy HH:mm", date);
    }

    public static String formateDate(String pattern, Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        if (date != null) {
            return simpleDateFormat.format(date);
        } else {
            return "";
        }
    }
    public static Date parseDateFr(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {

                //  SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");

                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");

                if(date.contains("T")) {
                    String date1 =Instant.parse(date )
                           // .atOffset( ZoneOffset.UTC )
                            //.atOffset( ZoneId.systemDefault().getRules().getOffset(Instant.now()) )
                            .atOffset( OffsetDateTime.now().getOffset())
                            .format(
                                    DateTimeFormatter.ofPattern( "dd/MM/yyyy HH:mm" )
                            ) ;

                    return simpleDateFormat.parse(date1);

                }


                Date date1=simpleDateFormat.parse(date);

                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }
    public static Date parseDateCampagne(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
            	
              //  SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
                
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");
                
                if(date.contains("T")) {
                	  String date1 =Instant.parse(date )                
                              .atOffset( ZoneOffset.UTC )                               
                              .format(                                                   
                                  DateTimeFormatter.ofPattern( "dd/MM/yyyy HH:mm" )   
                              ) ;
                	  
                	  return simpleDateFormat.parse(date1);
                	
                }
                
              
                Date date1=simpleDateFormat.parse(date); 
              
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }
    public static Date parse(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
            	                
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                
                if(date.contains("T")) {
                	  String date1 =Instant.parse(date )                
                              .atOffset( ZoneOffset.UTC )                               
                              .format(                                                   
                                  DateTimeFormatter.ofPattern( "yyyy-MM-dd" )   
                              ) ;
                	  
                	  return simpleDateFormat.parse(date1);
                	
                }
                
              
                Date date1=simpleDateFormat.parse(date); 
              
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }

    public static Date parseTimestamp(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static java.sql.Date convertFormUtilToSql(java.util.Date date) {
        if (date != null) {
            return new java.sql.Date(date.getTime());
        } else {
            return null;
        }
    }

    public static java.sql.Timestamp convertFormUtilToTimestamp(java.util.Date date) {
        if (date != null) {
            return new java.sql.Timestamp(date.getTime());
        } else {
            return null;
        }
    }

}
