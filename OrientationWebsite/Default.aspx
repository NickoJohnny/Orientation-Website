<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="OrientationWebsite.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <a href="Staff.aspx">Link</a>
            <br />
            <a href="Login.aspx">Login</a>
            <br />
            <a href="EditStaff.aspx">Edit</a>
            <br />
            <asp:Button ID="btn_logout" runat="server" Text="Logout" Font-Bold="True" onclick="btn_logout_Click"/><br />
        </div>
    </form>
</body>
</html>
