package com.highradius.main;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DeleteInvoice")
public class DeleteInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			Connection con = Connector.getConnection();
			String slNo = request.getParameter("slNo");
			String query = "DELETE FROM `grey_goose`.`winter_internship` WHERE sl_no = ?";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, slNo);
			st.executeUpdate();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
