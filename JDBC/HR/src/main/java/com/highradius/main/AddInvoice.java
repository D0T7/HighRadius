package com.highradius.main;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try {

			Connection con = Connector.getConnection();

			String businessCode = request.getParameter("businessCode");
			String custNumberInURL = request.getParameter("custNumber");
			int custNumber = Integer.parseInt(custNumberInURL);
			String clearDate = request.getParameter("clearDate");
			String businessYearInURL = request.getParameter("businessYear");
			int businessYear = Integer.parseInt(businessYearInURL);
			String docId = request.getParameter("docId");
			String postingDate = request.getParameter("postingDate");
			String documentCreateDate = request.getParameter("documentCreateDate");
			String dueInDate = request.getParameter("dueInDate");
			String invoiceCurrency = request.getParameter("invoiceCurrency");
			String documentType = request.getParameter("documentType");
			String postingIdInURL = request.getParameter("postingId");
			int postingId = Integer.parseInt(postingIdInURL);
			String totalOpenAmountInURL = request.getParameter("totalOpenAmount");
			double totalOpenAmount = Double.parseDouble(totalOpenAmountInURL);
			String baselineCreateDate = request.getParameter("baselineCreateDate");
			String custPaymentTerms = request.getParameter("custPaymentTerms");
			String invoiceIdInURL = request.getParameter("invoiceId");
			int invoiceId = Integer.parseInt(invoiceIdInURL);
//			String businessName = request.getParameter("businessName");
//			String nameCustomer = request.getParameter("nameCustomer");

			String query3 = "SELECT COUNT(*) AS businessCount FROM grey_goose.business WHERE business_code = '"
					+ businessCode + "'";
			Statement st3 = con.createStatement();
			ResultSet rs = st3.executeQuery(query3);
			while (rs.next()) {
				int businessCodeCount = rs.getInt("businessCount");

				if (businessCodeCount == 0) {
					String query = "INSERT INTO `grey_goose`.`business`(business_code) VALUES(?)";
					PreparedStatement st = con.prepareStatement(query);
					st.setString(1, businessCode);
//					st.setString(2, businessName);
					st.executeUpdate();
					st.close();
				}
			}

			rs.close();
			st3.close();

			String query4 = "SELECT COUNT(*) AS customerCount FROM grey_goose.customer WHERE cust_number ='"
					+ custNumber + "'";
			Statement st4 = con.createStatement();
			ResultSet rs1 = st4.executeQuery(query4);
			while (rs1.next()) {
				int customerNumberCount = rs1.getInt("customerCount");

				if (customerNumberCount == 0) {
					String query1 = "INSERT INTO `grey_goose`.`customer`(cust_number) VALUES(?)";
					PreparedStatement st1 = con.prepareStatement(query1);
					st1.setInt(1, custNumber);
//					st1.setString(2, nameCustomer);
					st1.executeUpdate();
					st1.close();
				}
			}

			rs1.close();
			st4.close();

			String query2 = "INSERT INTO `grey_goose`.`winter_internship`(business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement st2 = con.prepareStatement(query2);
			st2.setString(1, businessCode);
			st2.setInt(2, custNumber);
			st2.setString(3, clearDate);
			st2.setInt(4, businessYear);
			st2.setString(5, docId);
			st2.setString(6, postingDate);
			st2.setString(7, documentCreateDate);
			st2.setString(8, dueInDate);
			st2.setString(9, invoiceCurrency);
			st2.setString(10, documentType);
			st2.setInt(11, postingId);
			st2.setDouble(12, totalOpenAmount);
			st2.setString(13, baselineCreateDate);
			st2.setString(14, custPaymentTerms);
			st2.setInt(15, invoiceId);
			st2.executeUpdate();

			st2.close();
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

}
