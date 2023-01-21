package com.ana.test.service.util;

public class UniqueID {
    private static long current = System.currentTimeMillis();

    private UniqueID() {
    }

    public static void main(String[] args) {
        System.out.println(current);
    }

    static public synchronized long get() {
        return current++;
    }
}
