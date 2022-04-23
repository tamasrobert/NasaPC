package com.example.webshopproject;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;

public class Login extends AppCompatActivity {

    Button login;
    BottomNavigationView bnv;
    EditText username;
    EditText password;
    TextView error_text;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        //Change the built in bottom nav color
        getWindow().setNavigationBarColor(getResources().getColor(R.color.primary));

        login = findViewById(R.id.btn_login);
        bnv = findViewById(R.id.bottom_navigation);
        bnv.setSelectedItemId(R.id.profile);

        username = findViewById(R.id.text_username);
        password = findViewById(R.id.text_password);
        error_text = findViewById(R.id.error);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                postRequest(username.getText().toString(), password.getText().toString());
            }
        });

        bnv.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {

            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()) {
                    case R.id.products:
                        startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        overridePendingTransition(0,0);
                        return true;
                    case R.id.profile:
                        return true;
                    case R.id.orders:
                        startActivity(new Intent(getApplicationContext(), Orders.class));
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

    private void postRequest(String email, String password) {
        JSONObject jsonBody = new JSONObject();
        try {
            jsonBody.put("email", email);
            jsonBody.put("password", password);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        final String requestBody = jsonBody.toString();

        HashMap<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json; charset=utf-8");

        String url = Variables.getServerAddress() + "/api/login";
        JsonObjectRequest req = new JsonObjectRequest(Request.Method.POST, url, jsonBody,
                response -> {
                    try {
                        Log.d("RESPONSE", response.getJSONObject("0").getString("session"));

                        error_text.setVisibility(View.INVISIBLE);

                        SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);
                        SharedPreferences.Editor prefEditor = data.edit();
                        prefEditor.putBoolean("isLoggedIn", true);
                        prefEditor.commit();

                        Intent intent = new Intent(getApplicationContext(), Profile.class);
                        intent.putExtra("email", response.getJSONObject("0").getString("email"));
                        startActivity(intent);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                },
                error -> {
                    error_text.setVisibility(View.VISIBLE);
                }){
        };
        RequestQueue requestQueue = Volley.newRequestQueue(Login.this);
        requestQueue.add(req);
    }
}