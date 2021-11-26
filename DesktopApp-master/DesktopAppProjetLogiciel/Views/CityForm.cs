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
    public partial class CityForm : Form
    {
        private CityController _cityController;
        public CityForm(CityController cityController, object[] cps, object[] cities)
        {
            InitializeComponent();
            _cityController = cityController;

            this.CityCP.Items.AddRange(cps);
            this.CityCP.Sorted = true;
            this.CityCP.AutoCompleteMode = AutoCompleteMode.SuggestAppend;
            this.CityCP.AutoCompleteSource = AutoCompleteSource.ListItems;
            this.CityCP.SelectedIndexChanged += new EventHandler(this.CityCP_TextChanged);

            this.CityCityName.Items.AddRange(cities);
            this.CityCityName.Sorted = true;
            this.CityCityName.AutoCompleteMode = AutoCompleteMode.SuggestAppend;
            this.CityCityName.AutoCompleteSource = AutoCompleteSource.ListItems;
            this.CityCityName.SelectedIndexChanged += new EventHandler(this.CityCityName_TextChanged);
        }
        /// <summary>
        /// This method dispose the form
        /// It is called when user press the cancel button
        /// </summary>
        private void CityCancelButton_Click(object sender, EventArgs e)
        {
            this.Dispose(true);
        }
        /// <summary>
        /// This method call methode to update or create a city the form
        /// It is called when user press the valid button
        /// </summary>
        private async void CityValidButton_Click(object sender, EventArgs e)
        {
            string msg = await _cityController.UpdateAndPostAsync(new City { CpCity = Convert.ToInt32(this.CityCP.Text), NameCity = this.CityCityName.Text },
                Convert.ToInt32(this.CityCP.Text));
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
        /// This method write the correct city cp when a city name is choose
        /// </summary>
        private void CityCityName_TextChanged(object sender, EventArgs e)
        {
            City city = _cityController.FindByCityName(this.CityCityName.Text);
            this.CityCP.Text = city.CpCity.ToString();
        }
        /// <summary>
        /// This method write the correct city name when a city cp is choose
        /// </summary>
        private async void CityCP_TextChanged(object sender, EventArgs e)
        {
            City city = await _cityController.FindByIdAsync(Convert.ToInt32(this.CityCP.Text));
            this.CityCityName.Text = city.NameCity;
        }
    }
}
