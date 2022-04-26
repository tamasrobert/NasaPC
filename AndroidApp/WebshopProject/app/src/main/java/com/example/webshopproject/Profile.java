package com.example.webshopproject;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class Profile extends AppCompatActivity {

    BottomNavigationView bnv;
    Button logout;
    TextView email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        bnv = findViewById(R.id.bottom_navigation);
        bnv.setSelectedItemId(R.id.profile);
        logout = findViewById(R.id.btn_logout);
        email = findViewById(R.id.text_email);

        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            email.setText("Email címed: " + bundle.getString("email"));
        }


        //Change the built in bottom nav color
        getWindow().setNavigationBarColor(getResources().getColor(R.color.primary));

        SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);
        //SharedPreferences.Editor prefEditor = data.edit();
        //prefEditor.putBoolean("isLoggedIn", true);
        //prefEditor.commit();

        Log.d("ABC", String.valueOf(data.getBoolean("isLoggedIn", false)));

        /*

        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction ft = fm.beginTransaction();
        if(data.getBoolean("isLoggedIn", false)) {
            ft.replace(R.id.framelayout, new ProfileDetails());
        } else {
            ft.replace(R.id.framelayout, new Authentication());
        }
        ft.commit();

         */

        /*
        SharedPreferences gameSettings = getSharedPreferences("MyGamePreferences", MODE_PRIVATE);
        SharedPreferences.Editor prefEditor = gameSettings.edit();
        prefEditor.putString("UserName", "Guest123");
        prefEditor.commit();
         */

        logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);
                SharedPreferences.Editor prefEditor = data.edit();
                prefEditor.putBoolean("isLoggedIn", false);
                prefEditor.commit();

                startActivity(new Intent(getApplicationContext(), Login.class));
                finish();
            }
        });

        bnv.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {

            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);
                switch (item.getItemId()) {
                    case R.id.products:
                        startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        overridePendingTransition(0,0);
                        return true;
                    case R.id.profile:
                        return true;
                    case R.id.orders:
                        if(data.getBoolean("isLoggedIn", false)) {
                            startActivity(new Intent(getApplicationContext(), Orders.class));
                        } else {
                            startActivity(new Intent(getApplicationContext(), OrdersNotLoggedIn.class));
                        }
                        overridePendingTransition(0,0);
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