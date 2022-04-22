package com.example.webshopproject;

public class Variables {

    //DON'T USE LOCALHOST OR 127.0.0.1, USE PRIVATE IPv4 ADDRESS INSTEAD
    private static String serverAddress = "http://10.0.41.16:3000";

    public static String getServerAddress() {
        return serverAddress;
    }

}
