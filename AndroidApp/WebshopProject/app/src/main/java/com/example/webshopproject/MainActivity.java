package com.example.webshopproject;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.StrictMode;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
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

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class MainActivity extends AppCompatActivity {

    ListView listView;
    EditText editText;

    public ArrayList<Product> products;
    public ArrayList<Product> filteredProducts;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //IT HELPS LOAD THE IMAGE FROM URL
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);

        listView = findViewById(R.id.listView);
        editText = findViewById(R.id.editText);

        String url = "http://192.168.0.100:3000/api/products";
        products = new ArrayList<Product>();
        filteredProducts = new ArrayList<Product>();

        ArrayList<String> categories = new ArrayList<>();
        categories.add("All");

        Spinner spinner = (Spinner) findViewById(R.id.category_spinner);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(getApplicationContext(),  android.R.layout.simple_spinner_dropdown_item, categories);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                Log.d("TEXT_CHANGED", editText.getText().toString());

                filteredProducts.clear();

                for(int index = 0; index<products.size(); index++) {
                    if((spinner.getSelectedItem().toString().equalsIgnoreCase(products.get(index).getCategory()) && products.get(index).getName().toLowerCase().contains(editText.getText().toString().toLowerCase())) || (spinner.getSelectedItem().toString().equalsIgnoreCase("All") && products.get(index).getName().toLowerCase().contains(editText.getText().toString().toLowerCase()))) {
                        filteredProducts.add(products.get(index));
                    }
                }

                ProductAdapter productAdapter = new ProductAdapter(MainActivity.this, R.layout.list_row, filteredProducts);
                listView.setAdapter(productAdapter);
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                Log.d("CATEGORY", categories.get(position));

                filteredProducts.clear();
                for (int i = 0; i<products.size(); i++) {
                    if(categories.get(position).equalsIgnoreCase("All") && products.get(i).getName().toLowerCase().contains(editText.getText().toString().toLowerCase())) {
                        filteredProducts.add(products.get(i));
                    } else if(products.get(i).getCategory().equalsIgnoreCase(categories.get(position)) && products.get(i).getName().toLowerCase().contains(editText.getText().toString().toLowerCase())) {
                        filteredProducts.add(products.get(i));
                    }
                }

                ProductAdapter productAdapter = new ProductAdapter(MainActivity.this, R.layout.list_row, filteredProducts);
                listView.setAdapter(productAdapter);
            }
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Log.d("PRODUCT", products.get(i).getName());

                Intent intent = new Intent(MainActivity.this, SelectedProduct.class);
                intent.putExtra("_id", products.get(i).get_id());
                intent.putExtra("name", products.get(i).getName());
                intent.putExtra("category", products.get(i).getCategory());
                intent.putExtra("description", products.get(i).getDescription());
                intent.putExtra("price", products.get(i).getPrice());
                intent.putExtra("path", products.get(i).getPath());

                startActivity(intent);
            }
        });

        JsonArrayRequest jsonObjectRequest = new JsonArrayRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONArray>() {

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

                            ProductAdapter productAdapter = new ProductAdapter(MainActivity.this, R.layout.list_row, products);
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
    }
}