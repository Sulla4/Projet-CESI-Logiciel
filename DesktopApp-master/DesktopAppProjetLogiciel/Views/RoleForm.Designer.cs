
namespace DesktopAppProjetLogiciel.Views
{
    partial class RoleForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(RoleForm));
            this.label1 = new System.Windows.Forms.Label();
            this.RoleRole = new System.Windows.Forms.TextBox();
            this.RoleCancelButton = new System.Windows.Forms.Button();
            this.RoleValidButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(19, 20);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(76, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "New role :";
            // 
            // RoleRole
            // 
            this.RoleRole.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.RoleRole.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.RoleRole.ForeColor = System.Drawing.Color.Silver;
            this.RoleRole.Location = new System.Drawing.Point(95, 16);
            this.RoleRole.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.RoleRole.Name = "RoleRole";
            this.RoleRole.Size = new System.Drawing.Size(165, 27);
            this.RoleRole.TabIndex = 1;
            // 
            // RoleCancelButton
            // 
            this.RoleCancelButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))));
            this.RoleCancelButton.ForeColor = System.Drawing.SystemColors.ControlText;
            this.RoleCancelButton.Location = new System.Drawing.Point(173, 79);
            this.RoleCancelButton.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.RoleCancelButton.Name = "RoleCancelButton";
            this.RoleCancelButton.Size = new System.Drawing.Size(86, 31);
            this.RoleCancelButton.TabIndex = 31;
            this.RoleCancelButton.Text = "Cancel";
            this.RoleCancelButton.UseVisualStyleBackColor = false;
            this.RoleCancelButton.Click += new System.EventHandler(this.RoleCancelButton_Click);
            // 
            // RoleValidButton
            // 
            this.RoleValidButton.BackColor = System.Drawing.Color.LimeGreen;
            this.RoleValidButton.ForeColor = System.Drawing.SystemColors.ControlText;
            this.RoleValidButton.Location = new System.Drawing.Point(32, 79);
            this.RoleValidButton.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.RoleValidButton.Name = "RoleValidButton";
            this.RoleValidButton.Size = new System.Drawing.Size(86, 31);
            this.RoleValidButton.TabIndex = 30;
            this.RoleValidButton.Text = "Valid";
            this.RoleValidButton.UseVisualStyleBackColor = false;
            this.RoleValidButton.Click += new System.EventHandler(this.RoleValidButton_Click);
            // 
            // RoleForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.ClientSize = new System.Drawing.Size(290, 158);
            this.Controls.Add(this.RoleCancelButton);
            this.Controls.Add(this.RoleValidButton);
            this.Controls.Add(this.RoleRole);
            this.Controls.Add(this.label1);
            this.ForeColor = System.Drawing.Color.Silver;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.Name = "RoleForm";
            this.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.RightToLeftLayout = true;
            this.Text = "Role";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button RoleCancelButton;
        private System.Windows.Forms.Button RoleValidButton;
        private System.Windows.Forms.TextBox RoleRole;
    }
}