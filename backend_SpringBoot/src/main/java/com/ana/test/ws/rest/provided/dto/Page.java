package com.ana.test.ws.rest.provided.dto;


import java.util.List;

public class Page<T> {
    int size;
    int page;
    Long total;

    List<T> items;


    public Page(int size, int page, Long total, List<T> items) {
        this.size = size;
        this.page = page;
        this.total = total;
        this.items = items;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public List<T> getItems() {
        return items;
    }

    public void setItems(List<T> items) {
        this.items = items;
    }
}
