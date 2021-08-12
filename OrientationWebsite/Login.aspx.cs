using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;
using System.Web.SessionState;

namespace OrientationWebsite
{
    public partial class Login : System.Web.UI.Page
    {
        string str, UserName, Password;
        SqlCommand com;
        SqlDataAdapter sqlda;
        DataTable dt;
        int RowCount;

        protected void btn_login_Click(object sender, EventArgs e)
        {
            string connStr = ConfigurationManager.ConnectionStrings["LoginDB"].ConnectionString;
            SqlConnection conn = new SqlConnection(connStr);

            conn.Open();

            str = "Select * from dbo.Users";
            com = new SqlCommand(str);
            sqlda = new SqlDataAdapter(com.CommandText, conn);
            dt = new DataTable();
            sqlda.Fill(dt);
            RowCount = dt.Rows.Count;
            for (int i = 0; i < RowCount; i++)
            {
                UserName = dt.Rows[i]["UserName"].ToString();
                Password = dt.Rows[i]["Password"].ToString();
                if (UserName == TextBox_user_name.Text && Password == TextBox_password.Text)
                {
                    Session["Sid"] = Session.SessionID;
                    Response.Redirect("EditStaff.aspx");
                }
                else
                {
                    lb1.Text = "Invalid User Name or Password! Please try again!";
                }
            }

        }
    }
}