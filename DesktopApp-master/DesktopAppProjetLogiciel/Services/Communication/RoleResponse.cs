using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Services.Communication
{
    public class RoleResponse:BaseResponse
    {
        public Role Role { get; private set; }
        private RoleResponse(bool success, string message, Role role) : base(success, message)
        {
            Role = role;
        }
        /// <summary>
        /// Create a success response.
        /// </summary>
        /// <param name="role">Saved extraction</param>
        public RoleResponse(Role role) : this(true, string.Empty, role) { }
        /// <summary>
        /// Create an error response.
        /// </summary>
        /// <param name="message">Error message</param>
        public RoleResponse(string message) : this(false, message, null) { }
    }
}
