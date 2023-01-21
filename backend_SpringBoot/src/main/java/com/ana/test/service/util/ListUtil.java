package com.ana.test.service.util;


import java.util.List;
import java.util.ArrayList;

public class ListUtil {
    public static boolean isEmpty(List objects) {
        return objects == null || objects.isEmpty();
    }

    public static boolean isNotEmpty(List objects) {
        return !isEmpty(objects);
    }
    
    public static List removed(List coll1, List coll2) {
        List intersection = new ArrayList();
        if (coll1 != null)
            for (Object object : coll1) {
                if (coll2 != null && !coll2.contains(object))
                    intersection.add(object);
            }
        return intersection;
    }

    public static List added(List coll1, List coll2) {
        List intersection = new ArrayList();
        if (coll2 != null)
            for (Object object : coll2) {
                if (coll1 != null && !coll1.contains(object))
                    intersection.add(object);
            }

        return intersection;
    }

    

}
