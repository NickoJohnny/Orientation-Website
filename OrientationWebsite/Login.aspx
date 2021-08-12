<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="OrientationWebsite.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login</title>
</head>  
    <script type="text/javascript">  
    function Validate()  {  
        var UName=document.getElementById('TextBox_user_name');  
        var Password = document.getElementById('TextBox_password');  

        if ((UName.value=='') || (Password.value=='')){  
            alert('UserName or Password should not be blank');  
            return false;  
            }  
            else {  
                return true;  
            }  
        }  
    </script>
<body>  
    <form id="form1" runat="server"> 
        <h1>Admin Login</h1>
            <div> 
                <asp:Label ID="Label1" runat="server" Text="Name" Font-Bold="True" Width="100px"></asp:Label>  
                <asp:TextBox ID="TextBox_user_name" runat="server" Width="100px"></asp:TextBox><br />  
                <asp:Label ID="Label2" runat="server" Text="Password" Font-Bold="True" Width="100px"></asp:Label>  
                <asp:TextBox ID="TextBox_password" runat="server" TextMode="Password" Width="100px"></asp:TextBox><br /> 
                <asp:Label ID="lb1" runat="server" Width="500px"></asp:Label><br /> 
                <asp:Button ID="btn_login" runat="server" Text="Login" Font-Bold="True" OnClientClick="Validate()" onclick="btn_login_Click"/><br />
        </div>
    </form>
</body>
</html>
