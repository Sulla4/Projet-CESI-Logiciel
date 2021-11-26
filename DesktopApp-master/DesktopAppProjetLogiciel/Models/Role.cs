using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Models
{
    /// <summary>
    /// This class represent an entity from table Roles in db
    /// </summary>
    public class Role
    {
        public string IdRole { get; set; }
        public IList<User> Users { get; set; } = new List<User>();
    }
}
