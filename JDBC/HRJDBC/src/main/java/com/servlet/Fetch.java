package com.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.crud.Crud;
import com.google.gson.Gson;
import com.pojo.Business;

@WebServlet("/Fetch")
public class Fetch extends HttpServlet {
        private static final long serialVersionUID = 1L;

        protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
        {
                Crud fetchdata = new Crud();
                ArrayList<Business> data = fetchdata.getData();
                Gson gson = new Gson();
                String respData = gson.toJson(data);
                response.getWriter().print(respData);
        }

        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        	

        }

}