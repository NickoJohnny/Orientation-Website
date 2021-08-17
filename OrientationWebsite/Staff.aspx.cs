using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;

namespace OrientationWebsite
{
    public partial class Staff : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string connStr = ConfigurationManager.ConnectionStrings["StaffDB"].ConnectionString;
            SqlConnection conn = new SqlConnection(connStr);

            string sql1 = "SELECT(StaffTitle + ' ' + StaffFirst + ' ' + StaffLast) AS [Name], StaffDescription AS [Title], StaffContact AS [Contact Info] FROM dbo.StaffDB WHERE CategoryID = 1";
            SqlCommand cmd1 = new SqlCommand(sql1, conn);

            conn.Open();

            SqlDataReader reader1 = cmd1.ExecuteReader();
            
            GridView1.DataSource = reader1;
            GridView1.DataBind();

            conn.Close();

            string sql2 = "SELECT(StaffTitle + ' ' + StaffFirst + ' ' + StaffLast) AS [Name], StaffDescription AS [Title], StaffContact AS [Contact Info] FROM dbo.StaffDB WHERE CategoryID = 2; ";
            SqlCommand cmd2 = new SqlCommand(sql2, conn);

            conn.Open();

            SqlDataReader reader2 = cmd2.ExecuteReader();

            GridView2.DataSource = reader2;
            GridView2.DataBind();

            conn.Close();

            string sql3 = "SELECT(StaffTitle + ' ' + StaffFirst + ' ' + StaffLast) AS [Name], StaffDescription AS [Title], StaffContact AS [Contact Info] FROM dbo.StaffDB WHERE CategoryID = 3; ";
            SqlCommand cmd3 = new SqlCommand(sql3, conn);

            conn.Open();

            SqlDataReader reader3 = cmd3.ExecuteReader();

            GridView3.DataSource = reader3;
            GridView3.DataBind();

            conn.Close();
        }
    }
}