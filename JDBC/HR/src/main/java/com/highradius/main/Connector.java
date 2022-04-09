package com.highradius.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connector {
    public static Connection getConnection() throws ClassNotFoundException, SQLException {
        String url = "jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull";
        String user = "root";
        String pass = "&MyJDiMEVDtS4F4fKVpG";

        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(url, user, pass);

        return con;
    }

}
