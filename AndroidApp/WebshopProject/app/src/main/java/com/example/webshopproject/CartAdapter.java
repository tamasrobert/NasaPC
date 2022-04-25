package com.example.webshopproject;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.content.ContextCompat;

import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;

public class CartAdapter extends ArrayAdapter<CartItem> {
    private Context mContext;
    private int mResource;

    public CartAdapter(@NonNull Context context, int resource, @NonNull ArrayList<CartItem> objects) {
        super(context, resource, objects);
        this.mContext = context;
        this.mResource = resource;
    }

    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        LayoutInflater layoutInflater = LayoutInflater.from(mContext);

        if (convertView == null) {
            convertView = layoutInflater.inflate(R.layout.cart_row, parent, false);
        }

        ConstraintLayout layout = convertView.findViewById(R.id.layout);

        ImageView imageView = convertView.findViewById(R.id.imageView);
        TextView txtName = convertView.findViewById(R.id.txtName);
        TextView txtPrice = convertView.findViewById(R.id.txtPrice);

        Button subtract = convertView.findViewById(R.id.subtract);
        TextView quantity = convertView.findViewById(R.id.quantity);
        Button add = convertView.findViewById(R.id.add);

        subtract.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int quint = Integer.valueOf(quantity.getText().toString())-1;
                if(quint != 0) {
                    quantity.setText(String.valueOf(quint));
                    Variables.cart.get(position).setQuantity(quint);
                } else {
                    Variables.cart.remove(getItem(position));
                }
                CartAdapter productAdapter = new CartAdapter(mContext, R.layout.cart_row, Variables.cart);
                Cart.listView.setAdapter(productAdapter);

                Cart.tc.setText("Fizetendő: " + String.valueOf(Variables.getCartItemsCost()) + " Ft");
            }
        });

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int quint = Integer.valueOf(quantity.getText().toString())+1;
                quantity.setText(String.valueOf(Integer.valueOf(quantity.getText().toString())+1));
                Variables.cart.get(position).setQuantity(quint);

                CartAdapter productAdapter = new CartAdapter(mContext, R.layout.cart_row, Variables.cart);
                Cart.listView.setAdapter(productAdapter);

                Cart.tc.setText("Fizetendő: " + String.valueOf(Variables.getCartItemsCost()) + " Ft");
            }
        });

        //imageView.setImageResource(getItem(position));
        imageView.setImageDrawable(LoadImageFromWebOperations( Variables.getServerAddress() + "/images/products/" + getItem(position).getPath()));

        txtName.setText(getItem(position).getName());
        txtPrice.setText(String.valueOf(getItem(position).getPrice()) + " Ft");
        quantity.setText(String.valueOf(getItem(position).getQuantity()));

        return convertView;
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
