package com.example.webshopproject;

import java.util.ArrayList;

public class Order {

    private String ID;
    private ArrayList<String> products; //It only stores the name

    public Order(String ID, ArrayList<String> products) {
        this.ID = ID;
        this.products = products;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public ArrayList<String> getProducts() {
        return products;
    }

    public void setProducts(ArrayList<String> products) {
        this.products = products;
    }
}
