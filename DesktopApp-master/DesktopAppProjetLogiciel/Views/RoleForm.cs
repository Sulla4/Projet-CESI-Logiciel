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
    public partial class RoleForm : Form
    {
        private RoleController _roleController;
        public RoleForm(RoleController roleController)
        {
            InitializeComponent();
            _roleController = roleController;
        }
        /// <summary>
        /// This method call methode to create a role the form
        /// It is called when user press the valid button
        /// </summary>
        private async void RoleValidButton_Click(object sender, EventArgs e)
        {
            string msg = await _roleController.PostAsync(new Models.Role { IdRole = this.RoleRole.Text });
            if (msg == "")
            {
                this.Dispose(true);
            }
            else
            {
                MessageBox.Show(msg);
            }
        }
        /// <summary>
        /// This method dispose the form
        /// It is called when user press the cancel button
        /// </summary>
        private void RoleCancelButton_Click(object sender, EventArgs e)
        {
            this.Dispose(true);
        }
    }
}
