
namespace DesktopAppProjetLogiciel.Views
{
    partial class MenuForm
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
            this.components = new System.ComponentModel.Container();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MenuForm));
            this.MenuUsers = new System.Windows.Forms.DataGridView();
            this.Id = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.LastName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.FirstName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Email = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.Role = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ContextMenu = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.ContextMenuEdit = new System.Windows.Forms.ToolStripMenuItem();
            this.ContextMenuDelete = new System.Windows.Forms.ToolStripMenuItem();
            this.ContextMenuAdd = new System.Windows.Forms.ToolStripMenuItem();
            this.ContextMenuAddUser = new System.Windows.Forms.ToolStripMenuItem();
            this.ContextMenuAddRole = new System.Windows.Forms.ToolStripMenuItem();
            this.ContextMenuAddCity = new System.Windows.Forms.ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)(this.MenuUsers)).BeginInit();
            this.ContextMenu.SuspendLayout();
            this.SuspendLayout();
            // 
            // MenuUsers
            // 
            dataGridViewCellStyle1.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.Silver;
            this.MenuUsers.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.MenuUsers.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.DisplayedCells;
            this.MenuUsers.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.Silver;
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.MenuUsers.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            this.MenuUsers.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.MenuUsers.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.Id,
            this.LastName,
            this.FirstName,
            this.Email,
            this.Role});
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.Silver;
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.MenuUsers.DefaultCellStyle = dataGridViewCellStyle3;
            this.MenuUsers.Dock = System.Windows.Forms.DockStyle.Left;
            this.MenuUsers.GridColor = System.Drawing.Color.Black;
            this.MenuUsers.Location = new System.Drawing.Point(0, 0);
            this.MenuUsers.Name = "MenuUsers";
            this.MenuUsers.ReadOnly = true;
            this.MenuUsers.RowHeadersVisible = false;
            this.MenuUsers.RowHeadersWidth = 51;
            dataGridViewCellStyle4.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.Silver;
            this.MenuUsers.RowsDefaultCellStyle = dataGridViewCellStyle4;
            this.MenuUsers.RowTemplate.DefaultCellStyle.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.MenuUsers.RowTemplate.DefaultCellStyle.ForeColor = System.Drawing.Color.Silver;
            this.MenuUsers.RowTemplate.Height = 25;
            this.MenuUsers.Size = new System.Drawing.Size(748, 450);
            this.MenuUsers.TabIndex = 0;
            // 
            // Id
            // 
            this.Id.HeaderText = "Id";
            this.Id.MinimumWidth = 6;
            this.Id.Name = "Id";
            this.Id.ReadOnly = true;
            this.Id.Width = 42;
            // 
            // LastName
            // 
            this.LastName.HeaderText = "LastName";
            this.LastName.MinimumWidth = 6;
            this.LastName.Name = "LastName";
            this.LastName.ReadOnly = true;
            this.LastName.Width = 85;
            // 
            // FirstName
            // 
            this.FirstName.HeaderText = "FirstName";
            this.FirstName.MinimumWidth = 6;
            this.FirstName.Name = "FirstName";
            this.FirstName.ReadOnly = true;
            this.FirstName.Width = 86;
            // 
            // Email
            // 
            this.Email.HeaderText = "Email";
            this.Email.MinimumWidth = 6;
            this.Email.Name = "Email";
            this.Email.ReadOnly = true;
            this.Email.Width = 61;
            // 
            // Role
            // 
            this.Role.HeaderText = "Role";
            this.Role.MinimumWidth = 6;
            this.Role.Name = "Role";
            this.Role.ReadOnly = true;
            this.Role.Width = 55;
            // 
            // ContextMenu
            // 
            this.ContextMenu.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.ContextMenu.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.ContextMenuEdit,
            this.ContextMenuDelete,
            this.ContextMenuAdd});
            this.ContextMenu.Name = "MenuContext";
            this.ContextMenu.Size = new System.Drawing.Size(108, 70);
            // 
            // ContextMenuEdit
            // 
            this.ContextMenuEdit.Name = "ContextMenuEdit";
            this.ContextMenuEdit.Size = new System.Drawing.Size(107, 22);
            this.ContextMenuEdit.Text = "Edit";
            // 
            // ContextMenuDelete
            // 
            this.ContextMenuDelete.Name = "ContextMenuDelete";
            this.ContextMenuDelete.Size = new System.Drawing.Size(107, 22);
            this.ContextMenuDelete.Text = "Delete";
            // 
            // ContextMenuAdd
            // 
            this.ContextMenuAdd.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.ContextMenuAddUser,
            this.ContextMenuAddRole,
            this.ContextMenuAddCity});
            this.ContextMenuAdd.Name = "ContextMenuAdd";
            this.ContextMenuAdd.Size = new System.Drawing.Size(107, 22);
            this.ContextMenuAdd.Text = "Add";
            // 
            // ContextMenuAddUser
            // 
            this.ContextMenuAddUser.Name = "ContextMenuAddUser";
            this.ContextMenuAddUser.Size = new System.Drawing.Size(97, 22);
            this.ContextMenuAddUser.Text = "User";
            // 
            // ContextMenuAddRole
            // 
            this.ContextMenuAddRole.Name = "ContextMenuAddRole";
            this.ContextMenuAddRole.Size = new System.Drawing.Size(97, 22);
            this.ContextMenuAddRole.Text = "Role";
            // 
            // ContextMenuAddCity
            // 
            this.ContextMenuAddCity.Name = "ContextMenuAddCity";
            this.ContextMenuAddCity.Size = new System.Drawing.Size(97, 22);
            this.ContextMenuAddCity.Text = "City";
            // 
            // MenuForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.ClientSize = new System.Drawing.Size(772, 450);
            this.Controls.Add(this.MenuUsers);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "MenuForm";
            ((System.ComponentModel.ISupportInitialize)(this.MenuUsers)).EndInit();
            this.ContextMenu.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView MenuUsers;
        private System.Windows.Forms.DataGridViewTextBoxColumn Id;
        private System.Windows.Forms.DataGridViewTextBoxColumn LastName;
        private System.Windows.Forms.DataGridViewTextBoxColumn FirstName;
        private System.Windows.Forms.DataGridViewTextBoxColumn Email;
        private System.Windows.Forms.DataGridViewTextBoxColumn Role;
        private System.Windows.Forms.ContextMenuStrip ContextMenu;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuEdit;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuDelete;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuAdd;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuAddUser;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuAddRole;
        private System.Windows.Forms.ToolStripMenuItem ContextMenuAddCity;
    }
}