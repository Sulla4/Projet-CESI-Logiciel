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
    public partial class UserDetailsForm : Form
    {
        private UserController _userController;
        private CityController _cityController;
        private User _user;
        public UserDetailsForm(UserController userController, CityController cityController, object[] roles, object[] cps, object[] cities, User user)
        {
            InitializeComponent();
            _userController = userController;
            _cityController = cityController;

            this.UserDetailsCP.Items.AddRange(cps);
            this.UserDetailsCP.Sorted = true;
            this.UserDetailsCP.AutoCompleteMode = AutoCompleteMode.SuggestAppend;
            this.UserDetailsCP.AutoCompleteSource = AutoCompleteSource.ListItems;
            this.UserDetailsCP.SelectedIndexChanged += new EventHandler(this.UserDetailsDetailsCP_TextChanged);

            this.UserDetailsCity.Items.AddRange(cities);
            this.UserDetailsCity.Sorted = true;
            this.UserDetailsCity.AutoCompleteMode = AutoCompleteMode.SuggestAppend;
            this.UserDetailsCity.AutoCompleteSource = AutoCompleteSource.ListItems;
            this.UserDetailsCity.SelectedIndexChanged += new EventHandler(this.UserDetailsDetailsCity_TextChanged);

            this.UserDetailsRole.Items.AddRange(roles);
            this.UserDetailsRole.Sorted = true;
            this.UserDetailsRole.AutoCompleteMode = AutoCompleteMode.SuggestAppend;
            this.UserDetailsRole.AutoCompleteSource = AutoCompleteSource.ListItems;

            if (user!=null)
            {
                _user = user;
                this.UserDetailsId.Text = user.IdUser.ToString();
                this.UserDetailsFirstname.Text = user.FirstnameUser;
                this.UserDetailsLastname.Text = user.LastnameUser;
                this.UserDetailsName.Text = user.NameUser;
                this.UserDetailsPhone.Text = user.UserPhone;
                this.UserDetailsPoints.Text = user.PointsUser.ToString();
                this.UserDetailsRole.Text = user.Role_IdRole;
                this.UserDetailsSiret.Text = user.SiretUser.ToString();
                this.UserDetailsAddress.Text = user.AddressUser;
                this.UserDetailsCP.Text = user.CpCityId.ToString();
                this.UserDetailsEmail.Text = user.Email;
                this.UserDetailsIsSponsor.Text = user.IsSponsorUser.ToString();
                this.UserDetailsIsSponsorised.Text = user.IsSponsorisedUser.ToString();
            }
            else
            {
                _user = new User { IdUser = 0 };
            }
            
        }
        /// <summary>
        /// This method dispose the form
        /// It is called when user press the cancel button
        /// </summary>
        private void UserDetailsCancelButton_Click(object sender, EventArgs e)
        {
            this.Dispose(true);
        }
        /// <summary>
        /// This method call methode to update or create a user the form
        /// It is called when user press the valid button
        /// </summary>
        private async void UserDetailsValidButton_Click(object sender, EventArgs e)
        {
            string msg = await _userController.UpdateAndPostAsync(new User { AddressUser=this.UserDetailsAddress.Text, 
                CpCityId=Convert.ToInt32(this.UserDetailsCP.Text), Email=this.UserDetailsEmail.Text, 
                FirstnameUser=this.UserDetailsFirstname.Text, Role_IdRole=this.UserDetailsRole.Text, 
                IsSponsorisedUser=Convert.ToBoolean(this.UserDetailsIsSponsorised.Text), IsSponsorUser=Convert.ToBoolean(this.UserDetailsIsSponsor.Text), 
                LastnameUser=this.UserDetailsLastname.Text, NameUser=this.UserDetailsName.Text, PointsUser=Convert.ToInt32(this.UserDetailsPoints.Text), 
                SiretUser=Convert.ToInt32(this.UserDetailsSiret.Text), UserPhone=this.UserDetailsPhone.Text, City=new City { NameCity=this.UserDetailsCity.Text}
                }, _user.IdUser);
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
        /// This method write the correct city name when a city cp is choose
        /// </summary>
        private async void UserDetailsDetailsCP_TextChanged(object sender, EventArgs e)
        {
            _user.City = await _cityController.FindByIdAsync(Convert.ToInt32(this.UserDetailsCP.Text));
            this.UserDetailsCity.Text = _user.City.NameCity;
        }
        /// <summary>
        /// This method write the correct city cp when a city name is choose
        /// </summary>
        private void UserDetailsDetailsCity_TextChanged(object sender, EventArgs e)
        {
            _user.City = _cityController.FindByCityName(this.UserDetailsCity.Text);
            this.UserDetailsCP.Text = _user.City.CpCity.ToString();
        }
    }
}
