using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OrientationWebsite
{
    public partial class Main : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Gets the page url file name in lowercase.
            //string active = System.IO.Path.GetFileNameWithoutExtension(System.Web.HttpContext.Current.Request.Url.AbsolutePath).ToLower();

            //References
            //Control access from:
            //https://stackoverflow.com/questions/11797591/could-not-find-control-inside-loginview-loggedin-template
            string active = this.Parent.Page.Title;
            
            if (active == "About UoN")
            {
                (this.LoginView1.FindControl("About") as HyperLink).Attributes.Add("class", "active");
                //(this.LoginView2.FindControl("About") as HyperLink).Attributes.Add("class", "active");
            }

            else if (active == "UoN To-Do List")
            {
                //ToDo.Attributes.Add("class", "active");
                (LoginView1.FindControl("ToDo") as HyperLink).Attributes.Add("class", "active");
                //(LoginView2.FindControl("ToDo") as HyperLink).Attributes.Add("class", "active");
            }

            else if (active == "servicescallaghan" || active == "servicesnuspace" || active =="servicesourimbah" || active == "UoN Services")
            {
                //Services.Attributes.Add("class", "active");
                (LoginView1.FindControl("Services") as HyperLink).Attributes.Add("class", "active");
                //(LoginView2.FindControl("Services") as HyperLink).Attributes.Add("class", "active");
            }

            else if (active == "Staff")
            {
                //Staff.Attributes.Add("class", "active");
                (LoginView1.FindControl("Staff") as LinkButton).Attributes.Add("class", "active");
                //(LoginView2.FindControl("Staff") as HyperLink).Attributes.Add("class", "active");
            }

            else if (active == "UoN FAQ")
            {
                //FAQ.Attributes.Add("class", "active");
                (LoginView1.FindControl("FAQ") as HyperLink).Attributes.Add("class", "active");
                //(LoginView2.FindControl("FAQ") as HyperLink).Attributes.Add("class", "active");
            }
        }
    }
}