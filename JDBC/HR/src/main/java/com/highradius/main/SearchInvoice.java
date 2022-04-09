package com.highradius.main;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.highradius.pojo.Invoice;

@WebServlet("/SearchInvoice")
public class SearchInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		int NO_OF_ROWS_TO_GET = 12;
		try {
			Connection con = Connector.getConnection();

			String pageInURL = request.getParameter("page");
			int page = Integer.parseInt(pageInURL) * NO_OF_ROWS_TO_GET;

			String slNoInURL = request.getParameter("slNo");
			int slNo = Integer.parseInt(slNoInURL);

			String query = "SELECT * FROM `grey_goose`.`winter_internship` WHERE sl_no LIKE '%" + slNo + "%' LIMIT "
					+ page + "," + NO_OF_ROWS_TO_GET;
			PreparedStatement st = con.prepareStatement(query);
			ResultSet rs = st.executeQuery();
			ArrayList<Invoice> data = new ArrayList<Invoice>();
			while (rs.next()) {
				Invoice invoice = new Invoice();
				invoice.setSlNo(rs.getInt("sl_no"));
				invoice.setBusinessCode(rs.getString("business_code"));
				invoice.setCustNumber(rs.getInt("cust_number"));
				invoice.setClearDate(rs.getDate("clear_date"));
				invoice.setBusinessYear(rs.getInt("business_year"));
				invoice.setDocId(rs.getString("doc_id"));
				invoice.setPostingDate(rs.getDate("posting_date"));
				invoice.setDocumentCreateDate(rs.getDate("document_create_date"));
				invoice.setDueInDate(rs.getDate("due_in_date"));
				invoice.setInvoiceCurrency(rs.getString("invoice_currency"));
				invoice.setDocumentType(rs.getString("document_type"));
				invoice.setPostingId(rs.getInt("posting_id"));
				invoice.setTotalOpenAmount(rs.getDouble("total_open_amount"));
				invoice.setBaselineCreateDate(rs.getDate("baseline_create_date"));
				invoice.setCustPaymentTerms(rs.getString("cust_payment_terms"));
				invoice.setInvoiceId(rs.getInt("invoice_id"));

				data.add(invoice);
			}
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices = gson.toJson(data);
			try {
				response.getWriter().write(invoices);
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

}
