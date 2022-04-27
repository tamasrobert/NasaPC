package com.example.webshopproject;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class PlaceOrder extends AppCompatActivity {

    Button placeOrder;
    EditText realName;
    EditText email;
    EditText phoneNumber;
    EditText shippingAddress;
    CheckBox checkBox;
    TextView errorMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_place_order);

        placeOrder = findViewById(R.id.btn_place_order);

        realName = findViewById(R.id.input_username);
        email = findViewById(R.id.input_email);
        phoneNumber = findViewById(R.id.input_phone_number);
        shippingAddress = findViewById(R.id.input_address);
        checkBox = findViewById(R.id.checkBox);
        errorMessage = findViewById(R.id.error_message);


        fillSpinner();

        //Change the built in bottom nav color
        getWindow().setNavigationBarColor(getResources().getColor(R.color.primary));

        placeOrder.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ArrayList<String> products = new ArrayList<>();
                for (int i = 0; i<Variables.cart.size(); i++) {
                    products.add(Variables.cart.get(i).name);
                }
                Variables.orders.add(new Order("TEST", products, 999));

                if(realName.getText().toString().split(" ").length <= 1) {
                    errorMessage.setText("Hiba: Kérem valós nevet adjon meg!");
                    errorMessage.setVisibility(View.VISIBLE);
                } else if (email.getText().toString().equals("") || phoneNumber.getText().equals("") || shippingAddress.getText().equals("")) {
                    errorMessage.setText("Hiba: Kérem töltse ki az összes mezőt!");
                    errorMessage.setVisibility(View.VISIBLE);
                } else if (!checkBox.isChecked()) {
                    errorMessage.setText("Hiba: Kérem fogadja el a szabályzatot!");
                    errorMessage.setVisibility(View.VISIBLE);
                } else {
                    postOrder(realName.getText().toString().split(" ")[1], realName.getText().toString().split(" ")[0], email.getText().toString(), phoneNumber.getText().toString(), shippingAddress.getText().toString());
                    startActivity(new Intent(PlaceOrder.this, OrderSuccess.class));
                }


            }
        });
    }

    private void fillSpinner() {
        ArrayList<String> payment_methods = new ArrayList<>();
        payment_methods.add("Előre utalás");
        payment_methods.add("Utánvét");

        Spinner spinner = (Spinner) findViewById(R.id.spinner);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getApplicationContext(),  android.R.layout.simple_spinner_dropdown_item, payment_methods);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);
    }

    private void postOrder(String firstName, String lastName, String email, String phoneNumber, String shippingAddress) {
        SharedPreferences data = getSharedPreferences("webshop", MODE_PRIVATE);

        JSONObject jsonBody = new JSONObject();
        try {
            jsonBody.put("last_name", "Gonda");
            jsonBody.put("first_name", "Szabolcs");
            jsonBody.put("shipping_address", "9200, Mosonmagyaróvár valami utca 123");
            jsonBody.put("billing_address", "9200, Mosonmagyaróvár valami utca 123");
            jsonBody.put("email", "gonda.szabolcs.krisztian@students.jedlik.eu");
            jsonBody.put("phone_number", "+36301234567");
            jsonBody.put("total_price", Variables.getCartItemsCost());

            JSONArray arr = new JSONArray();
            JSONObject product2 = new JSONObject();
            for(int i = 0; i<Variables.cart.size(); i++) {
                JSONObject product = new JSONObject();
                CartItem item = Variables.cart.get(i);
                product.put("_id", item.get_id());
                product.put("name", item.getName());
                product.put("category", item.getCategory());
                product.put("description", item.getDescription());
                product.put("price", item.getPrice());
                product.put("path", item.getPath());
                product.put("quantity", item.getQuantity());

                product2.put("product", product);
                arr.put(product2);
            }


            jsonBody.put("items", arr);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        //final String requestBody = jsonBody.toString();

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, Variables.getBackendUrl() + "/api/mobile/place-order/" + data.getString("session", "")  , jsonBody, new Response.Listener<JSONObject>() {

                    //Variables.getBackendUrl() + "/api/mobile/place-order/" + data.getString("session", "")
                    //Variables.getBackendUrl() + "/api/mobile/test"

                    @Override
                    public void onResponse(JSONObject response) {

                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                        //textView.setText("Response: " + error.toString());
                    }
                });



        RequestQueue requestQueue = Volley.newRequestQueue(PlaceOrder.this);
        requestQueue.add(jsonObjectRequest);
    }
}