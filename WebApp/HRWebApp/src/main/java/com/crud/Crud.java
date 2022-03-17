package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.pojo.Business;

public class Crud {
	public Connection getConnection() {
		Connection connection = null;
		String url = "jdbc:mysql://localhost:3306/grey_goose";
		String user = "root";
		String pass = "&MyJDiMEVDtS4F4fKVpG";

		try {
			Class.forName("com.mysql.jdbc.Driver");
			connection = DriverManager.getConnection(url, user, pass);
		} catch (ClassNotFoundException CNFE) {

			CNFE.printStackTrace();
		} catch (SQLException SQLE) {
			SQLE.printStackTrace();
		}

		return connection;

	}

	public ArrayList<Business> getData() {
		ArrayList<Business> AllBusinesses = new ArrayList<Business>();
		String business_name;
		int business_code;

		try {
			Connection connection = getConnection();
			String sql_query = "SELECT * from greygoose.business";
			Statement sqlStatement = connection.createStatement();
			ResultSet SQLResultSet = sqlStatement.executeQuery(sql_query);

			while (SQLResultSet.next()) {
				Business businessObject = new Business();
				business_code = SQLResultSet.getInt("business_code");
				business_name = SQLResultSet.getString("business_name");
				businessObject.setBusiness_code(business_code);
				businessObject.setBusiness_name(business_name);
				AllBusinesses.add(businessObject);
			}
		} catch (SQLException SQLE) {
			SQLE.printStackTrace();
		}
		//print AllBusinesses to console
		for (Business business : AllBusinesses) {
			System.out.println(business.getBusiness_code() + " " + business.getBusiness_name());
		}
		return AllBusinesses;

	}
}
