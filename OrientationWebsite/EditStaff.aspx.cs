using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrientationWebsite
{
    public partial class EditStaff : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Sid"] == null)
            {
                Response.Redirect("Login.aspx");
            }

            if (!Page.IsPostBack)
            {
                string connStr = ConfigurationManager.ConnectionStrings["StaffDB"].ConnectionString;
                SqlConnection conn = new SqlConnection(connStr);

                conn.Open();

                SqlCommand cmd = new SqlCommand("SELECT StaffID, (StaffTitle +' '+ StaffFirst +' '+ StaffLast) AS FullName from dbo.StaffDB ORDER BY StaffLast;", conn);
                DataSet ds = new DataSet();
                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                sda.Fill(ds);
                DropDownList2.DataSource = ds;
                DropDownList2.DataTextField = "FullName";
                DropDownList2.DataValueField = "StaffID";
                DropDownList2.DataBind();
                DropDownList2.Items.Insert(0, new ListItem(" --Select-- ", "0"));
                conn.Close();
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string connStr = ConfigurationManager.ConnectionStrings["StaffDB"].ConnectionString;
            SqlConnection conn = new SqlConnection(connStr);

            using (SqlCommand cmd = new SqlCommand("INSERT INTO dbo.StaffDB(StaffTitle, StaffFirst, StaffLast, StaffDescription, StaffContact, CategoryID) VALUES(@StaffTitle, @StaffFirst, @StaffLast, @StaffDescription, @StaffContact, @CategoryID)", conn))
            {
                cmd.Parameters.AddWithValue("@StaffTitle", Title.Text);
                cmd.Parameters.AddWithValue("@StaffFirst", First.Text);
                cmd.Parameters.AddWithValue("@StaffLast", Last.Text);
                cmd.Parameters.AddWithValue("@StaffDescription", TextBox2.Text);
                cmd.Parameters.AddWithValue("@StaffContact", Contact.Text);
                cmd.Parameters.AddWithValue("@CategoryID", DropDownList1.SelectedValue);

                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }

            Page.Response.Redirect(Page.Request.Url.ToString(), true);
        }

        protected void DeleteStaff(object sender, EventArgs e)
        {
            string connStr = ConfigurationManager.ConnectionStrings["StaffDB"].ConnectionString;
            SqlConnection conn = new SqlConnection(connStr);

            using (SqlCommand cmd = new SqlCommand("DELETE FROM dbo.StaffDB WHERE StaffID = @StaffId", conn))
            {
                cmd.Parameters.AddWithValue("@StaffId", DropDownList2.SelectedValue);

                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }

            Page.Response.Redirect(Page.Request.Url.ToString(), true);
        }

        protected void EndSession(object sender, EventArgs e)
        {
            Session.Abandon();
            Response.Redirect("Login.aspx");
        }
    }
}