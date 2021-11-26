
namespace DesktopAppProjetLogiciel.Views
{
    partial class CityForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(CityForm));
            this.CityCityName = new System.Windows.Forms.ComboBox();
            this.CityCP = new System.Windows.Forms.ComboBox();
            this.CityCancelButton = new System.Windows.Forms.Button();
            this.CityValidButton = new System.Windows.Forms.Button();
            this.label14 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // CityCityName
            // 
            this.CityCityName.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.CityCityName.ForeColor = System.Drawing.Color.Silver;
            this.CityCityName.FormattingEnabled = true;
            this.CityCityName.Location = new System.Drawing.Point(126, 50);
            this.CityCityName.Name = "CityCityName";
            this.CityCityName.Size = new System.Drawing.Size(138, 24);
            this.CityCityName.TabIndex = 37;
            // 
            // CityCP
            // 
            this.CityCP.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.CityCP.ForeColor = System.Drawing.Color.Silver;
            this.CityCP.FormattingEnabled = true;
            this.CityCP.Location = new System.Drawing.Point(126, 19);
            this.CityCP.Name = "CityCP";
            this.CityCP.Size = new System.Drawing.Size(138, 24);
            this.CityCP.TabIndex = 36;
            // 
            // CityCancelButton
            // 
            this.CityCancelButton.BackColor = System.Drawing.Color.FromArgb(((int) (((byte) (192)))), ((int) (((byte) (0)))), ((int) (((byte) (0)))));
            this.CityCancelButton.ForeColor = System.Drawing.SystemColors.ControlText;
            this.CityCancelButton.Location = new System.Drawing.Point(163, 97);
            this.CityCancelButton.Name = "CityCancelButton";
            this.CityCancelButton.Size = new System.Drawing.Size(86, 25);
            this.CityCancelButton.TabIndex = 35;
            this.CityCancelButton.Text = "Cancel";
            this.CityCancelButton.UseVisualStyleBackColor = false;
            this.CityCancelButton.Click += new System.EventHandler(this.CityCancelButton_Click);
            // 
            // CityValidButton
            // 
            this.CityValidButton.BackColor = System.Drawing.Color.LimeGreen;
            this.CityValidButton.ForeColor = System.Drawing.SystemColors.ControlText;
            this.CityValidButton.Location = new System.Drawing.Point(23, 97);
            this.CityValidButton.Name = "CityValidButton";
            this.CityValidButton.Size = new System.Drawing.Size(86, 25);
            this.CityValidButton.TabIndex = 34;
            this.CityValidButton.Text = "Valid";
            this.CityValidButton.UseVisualStyleBackColor = false;
            this.CityValidButton.Click += new System.EventHandler(this.CityValidButton_Click);
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.ForeColor = System.Drawing.Color.Silver;
            this.label14.Location = new System.Drawing.Point(14, 53);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(39, 17);
            this.label14.TabIndex = 33;
            this.label14.Text = "City :";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.ForeColor = System.Drawing.Color.Silver;
            this.label13.Location = new System.Drawing.Point(14, 22);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(79, 17);
            this.label13.TabIndex = 32;
            this.label13.Text = "Post code :";
            // 
            // CityForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int) (((byte) (64)))), ((int) (((byte) (64)))), ((int) (((byte) (64)))));
            this.ClientSize = new System.Drawing.Size(318, 157);
            this.Controls.Add(this.CityCityName);
            this.Controls.Add(this.CityCP);
            this.Controls.Add(this.CityCancelButton);
            this.Controls.Add(this.CityValidButton);
            this.Controls.Add(this.label14);
            this.Controls.Add(this.label13);
            this.Icon = ((System.Drawing.Icon) (resources.GetObject("$this.Icon")));
            this.Name = "CityForm";
            this.Text = "CityForm";
            this.ResumeLayout(false);
            this.PerformLayout();
        }

        #endregion

        private System.Windows.Forms.ComboBox CityCityName;
        private System.Windows.Forms.ComboBox CityCP;
        private System.Windows.Forms.Button CityValidButton;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Button CityCancelButton;
    }
}