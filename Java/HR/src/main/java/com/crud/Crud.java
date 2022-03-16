package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.pojo.business;

public class Crud {
	public Connection getConnection() {
		Connection connection = null;
		String url = "jdbc:mysql://localhost:3306/demo";
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

	public ArrayList<business> getData() {
		ArrayList<business> AllBusinesses = new ArrayList<business>();
		String business_name;
		int business_code;

		try {
			Connection connection = getConnection();
			String sql_query = "SELECT * from business";
			Statement sqlStatement = connection.createStatement();
			ResultSet SQLResultSet = sqlStatement.executeQuery(sql_query);

			while (SQLResultSet.next()) {
				business businessObject = new business();
				business_code = SQLResultSet.getInt("business_code");
				business_name = SQLResultSet.getString("business_name");
				businessObject.setBusiness_code(business_code);
				businessObject.setBusiness_name(business_name);
				AllBusinesses.add(businessObject);
			}
		} catch (SQLException SQLE) {
			SQLE.printStackTrace();
		}

		return AllBusinesses;

	}
}
