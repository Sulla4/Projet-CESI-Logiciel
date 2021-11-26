using DesktopAppProjetLogiciel.Controllers;
using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace DesktopAppProjetLogiciel.Views
{
    public partial class MenuForm : Form
    {
        private UserController _userController;
        private CityController _cityController;
        private RoleController _roleController;
        private LoginForm _loginForm;
        private IEnumerable<User> _users;
        public MenuForm(UserController userController, LoginForm loginForm)
        {
            InitializeComponent();
            _userController = userController;
            _cityController = new CityController();
            _roleController = new RoleController();
            _loginForm = loginForm;
            
            this.Activated += new EventHandler(this.PopulateDataGridView);
            this.MenuUsers.ContextMenuStrip = this.ContextMenu;
            this.MenuUsers.CellContentDoubleClick += new DataGridViewCellEventHandler(this.MenuUsers_CellContentDoubleClick);
            this.ContextMenuEdit.Click += new EventHandler(ContextMenuEdit_Click);
            this.ContextMenuDelete.Click += new EventHandler(ContextMenuDelete_Click);
            this.ContextMenuAddUser.Click += new EventHandler(ContextMenuAddUser_Click);
            this.ContextMenuAddRole.Click += new EventHandler(ContextMenuAddRole_Click);
            this.ContextMenuAddCity.Click += new EventHandler(ContextMenuAddCity_Click);
            this.FormClosing += new FormClosingEventHandler(this.MenuForm_closing);
        }
        /// <summary>
        /// This method refresh the data grid view
        /// It is called when user or app activate the form
        /// </summary>
        private async void PopulateDataGridView(Object sender, EventArgs e)
        {
            this.MenuUsers.Rows.Clear();
            _users = await _userController.ListAsync();
            
            foreach (User user in _users)
            {
                DataGridViewRow row = (DataGridViewRow)this.MenuUsers.Rows[0].Clone();
                row.Cells[0].Value = user.IdUser;
                row.Cells[1].Value = user.LastnameUser;
                row.Cells[2].Value = user.FirstnameUser;
                row.Cells[3].Value = user.Email;
                row.Cells[4].Value = user.Role_IdRole;
                this.MenuUsers.Rows.Add(row);
            }
        }
        /// <summary>
        /// This method call the EditUser method
        /// It is called when user double click then click on edit
        /// </summary>
        private void MenuUsers_CellContentDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
            EditUser();
        }
        /// <summary>
        /// This method call the EditUser method
        /// It is called when user right click then click on edit
        /// </summary>
        private void ContextMenuEdit_Click(Object sender, EventArgs e)
        {
            EditUser();
        }
        /// <summary>
        /// This method open the user details form
        /// It is called when user right click and click on add then user
        /// </summary>
        private async void ContextMenuAddUser_Click(Object sender, EventArgs e)
        {
            UserDetailsForm userDetailsForm = new UserDetailsForm(_userController, _cityController, await _roleController.ListAsync(),
                await _cityController.ListCityCpAsync(),
                await _cityController.ListCityNameAsync(),
                new User());
            userDetailsForm.Show();
        }
        /// <summary>
        /// This method open the role form
        /// It is called when user right click and click on add then role
        /// </summary>
        private void ContextMenuAddRole_Click(Object sender, EventArgs e)
        {
            RoleForm roleFrom = new RoleForm(_roleController);
            roleFrom.Show();
        }
        /// <summary>
        /// This method open the city form
        /// It is called when user right click and click on add then city
        /// </summary>
        private async void ContextMenuAddCity_Click(Object sender, EventArgs e)
        {
            CityForm cityForm = new CityForm(_cityController, await _cityController.ListCityCpAsync(), await _cityController.ListCityNameAsync());
            cityForm.Show();
        }
        /// <summary>
        /// This method call methode to delete a user
        /// It is called when user right click and click on delete
        /// </summary>
        private async void ContextMenuDelete_Click(Object sender, EventArgs e)
        {
            DataGridViewRow row = this.MenuUsers.CurrentRow;
            User user = new User
            {//await _userController.FindByIdAsync(Convert.ToInt32(row.Cells[0].Value));
                FirstnameUser = "Deleted user",
                LastnameUser = " ",
                Email = " ",
                AddressUser = " ",
                NameUser = " ",
                SiretUser = -1,
                UserPhone = " ",
                CpCityId = -1
            };
            string msg = await _userController.UpdateAndPostAsync(user, Convert.ToInt32(row.Cells[0].Value));
            if(msg != "")
            {
                MessageBox.Show($@"Can not delete user {row.Cells[3].Value}. Pleease contact your administrator");
            }
            MessageBox.Show("User deleted");
            this.Activate();
        }
        /// <summary>
        /// This method open the user details form
        /// </summary>
        private async void EditUser()
        {
            DataGridViewRow row = this.MenuUsers.CurrentRow;
            UserDetailsForm userDetailsForm = new UserDetailsForm(_userController, _cityController, await _roleController.ListAsync(),
                await _cityController.ListCityCpAsync(),
                await _cityController.ListCityNameAsync(),
                await _userController.FindByIdAsync(Convert.ToInt32(row.Cells[0].Value)));
            userDetailsForm.Show();
        }
        /// <summary>
        /// This method close the city form
        /// It is called when user close this form
        /// </summary>
        private void MenuForm_closing(object sender, EventArgs e)
        {
            _loginForm.Close();
        }
    }
}
