package com.ana.test.service.util;


import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {
    public static boolean isEmpty(String string) {
        return string == null || string.isEmpty();
    }

    public static boolean isNotEmpty(String string) {
        return !isEmpty(string);
    }

    public static boolean isNotEmpty(Object value) {
    return value!=null && !isEmpty(value.toString());
    }

    public static boolean isEmail(String email) {
        Pattern p = Pattern.compile(".+@.+\\.[a-z]+");
        Matcher m = p.matcher(email);
        return m.matches();
    }

    public static boolean composed(String s) {
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '.')
                return true;
        }
        return false;
    }

    public static String listToString(List<String> list) {
        String s = "";
        if (list != null) {
            for (String string : list) {
                s = s + string + ";";
            }
        }
        return s;
    }

    public static Long[] listStringToArray(List<String> list) {
        Long[] ids = {};
        if (list != null && !list.isEmpty()) {
            ids = new Long[list.size()];
            int i = 0;
            for (String id : list) {
                ids[i] = Long.valueOf(id);
                i++;
            }
        }
        return ids;
    }
}
