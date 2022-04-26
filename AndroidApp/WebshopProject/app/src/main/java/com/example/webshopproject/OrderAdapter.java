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

public class OrderAdapter extends ArrayAdapter<Order> {
    private Context mContext;
    private int mResource;

    public OrderAdapter(@NonNull Context context, int resource, @NonNull ArrayList<Order> objects) {
        super(context, resource, objects);
        this.mContext = context;
        this.mResource = resource;
    }

    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        LayoutInflater layoutInflater = LayoutInflater.from(mContext);

        if (convertView == null) {
            convertView = layoutInflater.inflate(R.layout.order_row, parent, false);
        }

        ConstraintLayout layout = convertView.findViewById(R.id.layout);

        ImageView imageView = convertView.findViewById(R.id.imageView);
        TextView txtName = convertView.findViewById(R.id.txtName);
        TextView txtItems = convertView.findViewById(R.id.txtItems);

        imageView.setImageResource(R.drawable.package_icon);
        txtName.setText(getItem(position).getID());
        String prodStr = "";
        for(int i = 0; i< Variables.orders.get(position).getProducts().size(); i++) {
            if(i != Variables.orders.get(position).getProducts().size()-1) {
                prodStr += Variables.orders.get(position).getProducts().get(i) + "\n\n";
            } else {
                prodStr += Variables.orders.get(position).getProducts().get(i);
            }
        }
        txtItems.setText(prodStr);

        return convertView;
    }

}
