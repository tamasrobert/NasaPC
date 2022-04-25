package com.example.webshopproject;

import android.os.Build;

import java.util.ArrayList;

public class Variables {

    //DON'T USE LOCALHOST OR 127.0.0.1, USE PRIVATE IPv4 ADDRESS INSTEAD
    private static String serverAddress = "http://185.119.182.52:3000";

    public static ArrayList<Product> products;
    public static ArrayList<Product> filteredProducts;
    public static ArrayList<CartItem> cart = new ArrayList<CartItem>();

    public static void addToCart(Product p) {
        boolean match = false;
        for(int i = 0; i<cart.size(); i++) {
            if(cart.get(i)._id == p._id) {
                cart.get(i).setQuantity(cart.get(i).getQuantity()+1);
                match = true;
                break;
            }
        }
        if(!match) {
            cart.add(new CartItem(p._id, p.name, p.category, p.description, p.price, p.path));
        }
    }

    public static int getCartItemsCost() {
        int sum = 0;
        for(int i = 0; i<cart.size(); i++) {
            sum += cart.get(i).price*cart.get(i).getQuantity();
        }
        return sum;
    }

    public static String getServerAddress() {
        return serverAddress;
    }

}
