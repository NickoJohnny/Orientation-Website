<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="OrientationWebsite.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>  
<body> 
     <div class="topnav">
        <img class="logoimg" src="Media/favicon.png" />
    	  <a href="home.html">Home</a>
    	  <a href="about.html">About</a>
          <a href="todo.html">To-Do List</a>
    	  <a onclick="services();">Services</a>
          <a href="Staff.aspx">Staff</a>
    	  <a href="faq.html">FAQ</a>
      </div>

    <form id="form1" runat="server"> 
        <h1>Admin Login</h1>
        <table class="auto-style1">  
                <tr>
                    <td class="auto-style2">
                        <asp:Label ID="Label1" runat="server" Text="Name" Font-Bold="True" Width="100px"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TextBox_user_name" runat="server" Width="100px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">
                        <asp:Label ID="Label2" runat="server" Text="Password" Font-Bold="True" Width="100px"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TextBox_password" runat="server" TextMode="Password" Width="100px"></asp:TextBox>
                    </td>
                </tr>
            </table>
            <asp:Label ID="lb1" runat="server"></asp:Label><br />
            <asp:Button ID="btn_login" runat="server" Text="Login" Font-Bold="True" onclick="btn_login_Click"/>
    </form>
</body>
</html>
