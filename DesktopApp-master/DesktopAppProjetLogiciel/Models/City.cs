using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Models
{
    /// <summary>
    /// This class represent an entity from table Cities in db
    /// </summary>
    public class City
    {
        public int CpCity { get; set; }
        public string NameCity { get; set; }
        public IList<User> users { get; set; } = new List<User>();
    }
}
