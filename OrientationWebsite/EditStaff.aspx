<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EditStaff.aspx.cs" Inherits="OrientationWebsite.EditStaff" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Edit Staff</title>
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
    <form id="form2" runat="server">
        <h1>Edit Staff</h1>
        <h2>Add Staff</h2>
        <div>
            <table class="auto-style1">  
                <tr>  
                    <td>Staff Title :</td>  
                    <td>  
                        <asp:TextBox ID="Title" runat="server" Width="308px"></asp:TextBox>  
                    </td> 
                    <td>
                         &nbsp;</td>
  
               </tr> 
                <tr>  
                    <td>Staff First Name :</td>  
                    <td>  
                        <asp:TextBox ID="First" runat="server" Width="308px"></asp:TextBox>  
                    </td> 
                    <td>
                         &nbsp;</td>
               </tr>  
                <tr>  
                    <td>Staff Last Name :</td>  
                    <td>  
                        <asp:TextBox ID="Last" runat="server" Width="308px"></asp:TextBox>  
                    </td> 
                    <td>
                         <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Enter Staff Last Name" ControlToValidate="Last" ValidationGroup="Add"></asp:RequiredFieldValidator>
                    </td>
               </tr>  
                <tr>  
                    <td>Staff Description: </td>  
                     <td> <asp:TextBox ID="TextBox2" runat="server" Width="308px"></asp:TextBox></td>
                    <td>
                         <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="Enter Staff Description" ControlToValidate="TextBox2" ValidationGroup="Add"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>  
                    <td>Staff Contact: </td>  
                     <td> <asp:TextBox ID="Contact" runat="server" Width="308px"></asp:TextBox></td>
                    <td>
                         <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Enter Staff Contact" ControlToValidate="Contact" ValidationGroup="Add"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>Staff Category</td>
                    <td>
                     <asp:DropDownList ID="DropDownList1" runat="server"> 
                            <asp:ListItem Text="Select Category" Value="0"></asp:ListItem>
                            <asp:ListItem Text="College Of Human Aand Social Futures" Value="1"></asp:ListItem>  
                            <asp:ListItem Text="College Of Engineering, Science And Enviroment" Value="2"></asp:ListItem>  
                            <asp:ListItem Text="College Of Health, Medicine And Wellbeing" Value="3"></asp:ListItem>
                        </asp:DropDownList>  
                    </td>
                    <td>
                         <asp:CompareValidator ID="CompareValidator2" runat="server" ErrorMessage="Choose Category" Operator="NotEqual" ValueToCompare="0" Type="Integer" ValidationGroup="Add" ControlToValidate="DropDownList1"></asp:CompareValidator>
                    </td>
                </tr>
                <tr>  
                    <td>
                        <asp:Button ID="Add" runat="server" Text="Add Staff" OnClick="Button1_Click" ValidationGroup="Add" />  
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
                    <td>
                         <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="Choose Valid Staff Member" Operator="NotEqual" ValueToCompare="0" Type="Integer" ValidationGroup="Delete" ControlToValidate="DropDownList2"></asp:CompareValidator>
                    </td>
                </tr>
                <tr>  
                    <td>  
                        <asp:Button ID="Delete" runat="server" Text="Delete Staff" OnClick="DeleteStaff" ValidationGroup="Delete" />  
                    </td>  
                </tr>  
            </table>  
        </div>
    </form>
</body>
</html>
