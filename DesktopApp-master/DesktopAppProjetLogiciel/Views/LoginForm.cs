using DesktopAppProjetLogiciel.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace DesktopAppProjetLogiciel.Views
{
    public partial class LoginForm : Form
    {
        private UserController _userController;
        public LoginForm(string email = null, string password = null)
        {
            InitializeComponent();
            _userController = new UserController();
            this.FormClosing += new FormClosingEventHandler(this.LoginForm_closing);
            if (email !=null && password != null)
            {
                checkLogin(email, password);
            }
        }
        /// <summary>
        /// This method call methode to check the login of the user
        /// It is called when user press the valid button
        /// </summary>
        private void LoginValid_Click(object sender, EventArgs e)
        {
            checkLogin(this.LoginEmail.Text, this.LoginPassword.Text);   
        }
        /// <summary>
        /// This method call methode to check the login of the user and show the menu form if the login is correct
        /// </summary>
        private void checkLogin(string email, string password)
        {
            if (_userController.CheckLogin(email, password))
            {
                MenuForm menuForm = new MenuForm(_userController, this);
                menuForm.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("incorrect email or password");
            }
        }
        /// <summary>
        /// This method dispose the form
        /// It is called when user press the cancel button
        /// </summary>
        private void LoginForm_closing(object sender, EventArgs e)
        {
            this.Dispose(true);
        }
    }
}
