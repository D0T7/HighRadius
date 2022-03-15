import java.sql.*;

public class databaseConnection {
	public static void main(String[] args) throws Exception {
		String URL = "jdbc:mysql://localhost:3306/grey_goose";
		String user = "root";
		String password = "&MyJDiMEVDtS4F4fKVpG";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(URL, user, password);
		Statement st = connection.createStatement();
		ResultSet rs = st.executeQuery("SELECT * FROM grey_goose.business;");
		while (rs.next()) {
			System.out.println(rs.getString("business_name"));
		}
		st.close();
		connection.close();
	}
}
