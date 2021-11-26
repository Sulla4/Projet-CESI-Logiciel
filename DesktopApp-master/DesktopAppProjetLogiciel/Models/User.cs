using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Models
{
    /// <summary>
    /// This class represent an entity from table Users in db
    /// </summary>
    public class User
    {
        public int IdUser { get; set; }
        public string FirstnameUser { get; set; } = String.Empty;
        public string LastnameUser { get; set; } = String.Empty;
        public string NameUser { get; set; } = String.Empty;
        public string AddressUser { get; set; } = String.Empty;
        public int SiretUser { get; set; } = 0;
        public string MpUser { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string UserPhone { get; set; } = String.Empty;
        public int PointsUser { get; set; } = 0;
        public bool IsSponsorUser { get; set; } = false;
        public bool IsSponsorisedUser { get; set; } = false;
        public string Role_IdRole { get; set; } = String.Empty;
        public Role Role { get; set; }
        public int CpCityId { get; set; } = 0;
        public City City { get; set; }
    }
}
