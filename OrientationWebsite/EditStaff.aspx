<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EditStaff.aspx.cs" Inherits="OrientationWebsite.EditStaff" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
    <script type="text/javascript">  
    function Validate()  {  
        var First=document.getElementById('First');  
        var Last = document.getElementById('Last'); 
        var Description = document.getElementById('TextBox2'); 

        if ((First.value=='') || (Last.value=='') || (Description.value=='')){  
            alert('Missing Information');  
            return false;  
            }  
            else {  
                return true;  
            }  
        }  
    </script>
<body>
    <form id="form2" runat="server">
        <h1>Edit Staff</h1>
        <h2>Add Staff</h2>
        <div>
            <table class="auto-style1">  
                <tr>  
                    <td>Staff Title :</td>  
                    <td>  
                        <asp:TextBox ID="Title" runat="server"></asp:TextBox>  
                    </td>  
  
               </tr> 
                <tr>  
                    <td>Staff First Name :</td>  
                    <td>  
                        <asp:TextBox ID="First" runat="server"></asp:TextBox>  
                    </td>  
               </tr>  
                <tr>  
                    <td>Staff Last Name :</td>  
                    <td>  
                        <asp:TextBox ID="Last" runat="server"></asp:TextBox>  
                    </td>  
               </tr>  
                <tr>  
                    <td>Staff Description: </td>  
                     <td> <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox></td>  
                </tr>
                <tr>
                    <td>Staff Category</td>
                    <td>
                     <asp:DropDownList ID="DropDownList1" runat="server">  
                            <asp:ListItem Text="College Of Human Aand Social Futures" Value="1"></asp:ListItem>  
                            <asp:ListItem Text="College Of Engineering, Science And Enviroment" Value="2"></asp:ListItem>  
                            <asp:ListItem Text="College Of Health, Medicine And Wellbeing" Value="3"></asp:ListItem>
                        </asp:DropDownList>  
                    </td>
                </tr>
                <tr>  
                    <td>
                        <asp:Button ID="Add" runat="server" Text="Add Staff" 
                            OnClientClick="Validate()" OnClick="Button1_Click" />  
                    </td>  
                </tr>  
            </table>  
        </div>
 

        <h2>Delete Staff</h2>
        <div>
            <table class="auto-style1">  
                <tr>
                    <td>Staff Name To Delete</td>
                    <td>
                     <asp:DropDownList ID="DropDownList2" runat="server"></asp:DropDownList>  
                    </td>
                </tr>
                <tr>  
                    <td>  
                        <asp:Button ID="Delete" runat="server" Text="Delete Staff" OnClick="DeleteStaff" />  
                    </td>  
                </tr>  
            </table>  
        </div>
    </form>
</body>
</html>
