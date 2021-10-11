<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Staff.aspx.cs" Inherits="OrientationWebsite.Staff" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Staff</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="script.js" type="text/javascript"></script>
</head>
<body>
    <div class="topnav">
		<img class="logoimg" src="Media/favicon.png" />
	  	<a href="home.html">Home</a>
	  	<a href="about.html">About</a>
      	<a href="todo.html">To-Do List</a>
		<a onclick="services();">Services</a>
        <a class="active"=#staff>Staff</a>
	  	<a href="faq.html">FAQ</a>
    </div>

    <h1 style="padding-bottom:30px;">Staff</h1>
    <form id="form1" runat="server">
        <h2 style="text-align: center;">COLLEGE OF HUMAN AND SOCIAL FUTURES</h2>
            <div>
                <asp:Gridview CssClass="center"  ID="GridView1" runat="server" BorderStyle="None" GridLines="Horizontal" CellPadding="10" Width="75%">
                    <RowStyle HorizontalAlign="Center" />
                </asp:Gridview>
            </div>

        <h2 style="text-align: center; padding-top:30px;">COLLEGE OF ENGINEERING, SCIENCE AND ENVIRONMENT</h2> 
            <div>
                <asp:GridView CssClass="center" ID="GridView2" runat="server" CellPadding="10" GridLines="Horizontal" BorderStyle="None" Width="75%" OnSelectedIndexChanged="GridView2_SelectedIndexChanged">
                    <RowStyle HorizontalAlign="Center" />
                </asp:GridView>
            </div>

        <h2 style="text-align: center; padding-top:30px;">COLLEGE OF HEALTH, MEDICINE AND WELLBEING</h2>
            <div>
                <asp:GridView CssClass="center" ID="GridView3" runat="server" CellPadding="10" GridLines="Horizontal" BorderStyle="None" Width="75%">
                    <RowStyle HorizontalAlign="Center" />
                </asp:GridView>
            </div>
    </form>

     <footer class="footer">  
      <div>
        <h6>UoN Orientation Site</h6>
        <div class="footer-links">
          <a href="home.html">Home</a>
          <a href="about.html">About</a>
          <a href="todo.html">To-Do</a>
          <a onclick="services();">Services</a>
          <a onclick="staff();">Staff</a>
          <a href="faq.html">FAQ</a>
        </div>
  <div class="footer-links">
      <br/>
  <a href="EditStaff.aspx">Admin Login</a>
  <br/><br/>
  </div>
</div>
</footer>
</body>
</html>
