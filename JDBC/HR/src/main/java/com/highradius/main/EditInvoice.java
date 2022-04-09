package com.highradius.main;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/EditInvoice")
public class EditInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			Connection con = Connector.getConnection();
			String slNoInURL = request.getParameter("sl_no");
			int slNo = Integer.parseInt(slNoInURL);
			String invoiceCurrency = request.getParameter("invoice_currency");
			String custPaymentTerms = request.getParameter("cust_payment_terms");
			String query = "UPDATE `grey_goose`.`winter_internship` SET invoice_currency = ?,cust_payment_terms = ? WHERE sl_no = ?";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, invoiceCurrency);
			st.setString(2, custPaymentTerms);
			st.setInt(3, slNo);
			st.executeUpdate();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		doGet(request, response);
	}

}
