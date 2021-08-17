<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Staff.aspx.cs" Inherits="OrientationWebsite.Staff" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Staff</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="script.js" type="text/javascript"></script>
    <style type="text/css">
        .auto-style1 {
            margin: auto;
            width: 64%;
        }
    </style>
</head>
<body>
    <div class="topnav">
		<img class="logoimg" src="Media/favicon.png">
	  	<a href="home.html">Home</a>
	  	<a href="about.html">About</a>
      	<a href="todo.html">To-Do List</a>
		<a onclick="services();">Services</a>
        <a class="active"=#staff>Staff</a>
	  	<a href="faq.html">FAQ</a>
    </div>

    <h1>Staff</h1>
    <form id="form1" runat="server">
        <h2>COLLEGE OF HUMAN AND SOCIAL FUTURES</h2>
            <div>
                <asp:Gridview CssClass="center"  ID="GridView1" runat="server" BorderStyle="None" GridLines="None"></asp:Gridview>
            </div>

        <h2>COLLEGE OF ENGINEERING, SCIENCE AND ENVIRONMENT</h2>
            <div>
                <asp:GridView CssClass="center" ID="GridView2" runat="server"> </asp:GridView>
            </div>

        <h2>COLLEGE OF HEALTH, MEDICINE AND WELLBEING</h2>
            <div>
                <asp:GridView CssClass="center" ID="GridView3" runat="server"> </asp:GridView>
            </div>
    </form>
</body>
</html>
