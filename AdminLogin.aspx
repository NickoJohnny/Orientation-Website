<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AdminLogin.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h1>Admin Login</h1>
    <form id="form1" runat="server">
        <div>
            <table style="margin:auto; border:5px solid;">
                <tr>
                    <td><asp:Label ID="lblUsername" runat="server" Text="Username"></asp:Label></td>
                    <td><asp:TextBox ID="txtUsername" runat="server"></asp:TextBox></td>
                </tr>

                <tr>
                    <td><asp:Label ID="lblPassword" runat="server" Text="Password"></asp:Label></td>
                    <td><asp:TextBox ID="txtPassword" TextMode="Password" runat="server"></asp:TextBox></td>
                </tr>

                <tr>
                    <td></td>
                    <td><asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" /></td>
                </tr>

                <tr>
                    <td></td>
                    <td><asp:Label ID="lblErrorMessage" runat="server" Text="Incorrect Login Details" ForeColor="Red"></asp:Label></td>
                </tr>
            </table>

        </div>    
    </form>
</body>
</html>
