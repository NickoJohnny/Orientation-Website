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
            string active = this.Parent.Page.Title;
            
            if (active == "About UoN")
            {
                About.Attributes.Add("class", "active");
            }

            else if (active == "UoN To-Do List")
            {
                ToDo.Attributes.Add("class", "active");
            }

            else if (active == "servicescallaghan" || active == "servicesnuspace" || active =="servicesourimbah" || active == "UoN Services")
            {
                Services.Attributes.Add("class", "active");
            }

            else if (active == "Staff")
            {
                Staff.Attributes.Add("class", "active");
            }

            else if (active == "UoN FAQ")
            {
                FAQ.Attributes.Add("class", "active");
            }
        }
    }
}