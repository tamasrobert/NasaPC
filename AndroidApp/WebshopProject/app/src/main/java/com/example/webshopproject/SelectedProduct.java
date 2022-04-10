package com.example.webshopproject;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.widget.ImageView;
import android.widget.TextView;

import java.io.InputStream;
import java.net.URL;
import java.util.regex.Pattern;

public class SelectedProduct extends AppCompatActivity {

    ImageView imageView;
    TextView name;
    TextView description;
    TextView price;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_selected_product);

        imageView = findViewById(R.id.imageView);
        name = findViewById(R.id.name);
        description = findViewById(R.id.description);
        price = findViewById(R.id.price);

        description.setMovementMethod(new ScrollingMovementMethod());

        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            imageView.setImageDrawable(LoadImageFromWebOperations("http://192.168.0.100:3000/images/products/" + bundle.getString("path")));

            name.setText(bundle.getString("name"));
            description.setText(bundle.getString("description"));
            price.setText(String.valueOf(bundle.getInt("price")) + " Ft");
        }
    }

    public static Drawable LoadImageFromWebOperations(String url) {
        try {
            InputStream is = (InputStream) new URL(url).getContent();
            Drawable d = Drawable.createFromStream(is, "src name");
            return d;
        } catch (Exception e) {
            return null;
        }
    }
}