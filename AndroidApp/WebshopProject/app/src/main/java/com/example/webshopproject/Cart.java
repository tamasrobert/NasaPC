package com.example.webshopproject;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.ListView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class Cart extends AppCompatActivity {

    BottomNavigationView bnv;
    public static ListView listView;

    public ArrayList<Product> products;
    public ArrayList<Product> filteredProducts;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);

        bnv = findViewById(R.id.bottom_navigation);
        bnv.setSelectedItemId(R.id.cart);
        listView = findViewById(R.id.listView);

        products = new ArrayList<Product>();
        filteredProducts = new ArrayList<Product>();

        //Change the built in bottom nav color
        getWindow().setNavigationBarColor(getResources().getColor(R.color.primary));

        bnv.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {

            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()) {
                    case R.id.products:
                        startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        overridePendingTransition(0,0);
                        return true;
                    case R.id.profile:
                        SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);
                        if(data.getBoolean("isLoggedIn", false)) {
                            startActivity(new Intent(getApplicationContext(), Profile.class));
                        } else {
                            startActivity(new Intent(getApplicationContext(), Login.class));
                        }
                        overridePendingTransition(0,0);
                        return true;
                    case R.id.orders:
                        startActivity(new Intent(getApplicationContext(), Orders.class));
                        overridePendingTransition(0,0);
                        return true;
                    case R.id.cart:
                        return true;
                }

                return false;
            }
        });

        CartAdapter productAdapter = new CartAdapter(Cart.this, R.layout.cart_row, Variables.cart);
        listView.setAdapter(productAdapter);
    }

    /*
    private void getProducts() {
        JsonArrayRequest jsonObjectRequest = new JsonArrayRequest
                (Request.Method.GET, Variables.getServerAddress() + "/api/products", null, new Response.Listener<JSONArray>() {

                    @Override
                    public void onResponse(JSONArray response) {
                        products.clear();

                        try {
                            for(int i = 0; i<response.length(); i++) {
                                JSONObject jsonObj = response.getJSONObject(i);
                                products.add(new Product(jsonObj.getString("_id"), jsonObj.getString("name"), jsonObj.getString("category"), jsonObj.getString("description"), jsonObj.getInt("price"), jsonObj.getString("path")));
                            }

                            CartAdapter productAdapter = new CartAdapter(Cart.this, R.layout.cart_row, Variables.cart);
                            listView.setAdapter(productAdapter);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        //textView.setText("Response: " + error.toString());
                    }
                });

        RequestQueue requestQueue = Volley.newRequestQueue(Cart.this);
        requestQueue.add(jsonObjectRequest);
    }*/

    /*
    private void getProducts() {
        JsonArrayRequest jsonObjectRequest = new JsonArrayRequest
                (Request.Method.GET, Variables.getServerAddress() + "/api/products", null, new Response.Listener<JSONArray>() {

                    @Override
                    public void onResponse(JSONArray response) {
                        products.clear();
                        filteredProducts.clear();

                        try {
                            for(int i = 0; i<response.length(); i++) {
                                JSONObject jsonObj = response.getJSONObject(i);
                                if(!categories.contains(jsonObj.getString("category"))) {
                                    categories.add(jsonObj.getString("category"));
                                }
                                products.add(new Product(jsonObj.getString("_id"), jsonObj.getString("name"), jsonObj.getString("category"), jsonObj.getString("description"), jsonObj.getInt("price"), jsonObj.getString("path")));
                            }

                            filteredProducts.addAll(products);

                            ProductAdapter productAdapter = new ProductAdapter(Cart.this, R.layout.cart_row, products);
                            listView.setAdapter(productAdapter);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        //textView.setText("Response: " + error.toString());
                    }
                });

        RequestQueue requestQueue = Volley.newRequestQueue(MainActivity.this);
        requestQueue.add(jsonObjectRequest);
    }*/
}