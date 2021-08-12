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
                <asp:GridView ID="GridView1" runat="server"> </asp:GridView>
            </div>

        <h2>COLLEGE OF ENGINEERING, SCIENCE AND ENVIRONMENT</h2>
            <div>
                <asp:GridView ID="GridView2" runat="server"> </asp:GridView>
            </div>

        <h2>COLLEGE OF HEALTH, MEDICINE AND WELLBEING</h2>
            <div>
                <asp:GridView ID="GridView3" runat="server"> </asp:GridView>
            </div>
    </form>
</body>
</html>
