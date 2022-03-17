package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.pojo.Business;

public class Crudtest {
	
	public static void main(String args[]) {
		Connection connection = null;
		String url = "jdbc:mysql://localhost:3306/grey_goose";
		String user = "root";
		String pass = "&MyJDiMEVDtS4F4fKVpG";

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection(url, user, pass);
		} catch (ClassNotFoundException CNFE) {

			CNFE.printStackTrace();
		} catch (SQLException SQLE) {
			SQLE.printStackTrace();
		}
		ArrayList<Business> AllBusinesses = new ArrayList<Business>();
		String business_name;
		String business_code;

		try {
			String sql_query = "SELECT * from grey_goose.business";
			Statement sqlStatement = connection.createStatement();
			ResultSet SQLResultSet = sqlStatement.executeQuery(sql_query);

			while (SQLResultSet.next()) {
				Business businessObject = new Business();
				business_code = SQLResultSet.getString("business_code");
				business_name = SQLResultSet.getString("business_name");
				businessObject.setBusiness_code(business_code);
				businessObject.setBusiness_name(business_name);
				AllBusinesses.add(businessObject);
			}
		} catch (SQLException SQLE) {
			SQLE.printStackTrace();
		}

		for (Business business : AllBusinesses) {
			// System.out.println(business.getBusiness_code() + " " + business.getBusiness_name());
			System.out.println(business);
		}

	}

}
