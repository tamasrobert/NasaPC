package com.example.webshopproject;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class Orders extends AppCompatActivity {

    BottomNavigationView bnv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_orders);

        bnv = findViewById(R.id.bottom_navigation);
        bnv.setSelectedItemId(R.id.orders);

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
                        return true;
                    case R.id.cart:
                        startActivity(new Intent(getApplicationContext(), Cart.class));
                        overridePendingTransition(0,0);
                        return true;
                }

                return false;
            }
        });
    }
}