using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Services.Communication
{
    public class UserResponse:BaseResponse
    {
        public User User { get; private set; }
        private UserResponse(bool success, string message, User user) : base(success, message)
        {
            User = user;
        }
        /// <summary>
        /// Create a success response.
        /// </summary>
        /// <param name="user">Saved extraction</param>
        public UserResponse(User user) : this(true, string.Empty, user) { }
        /// <summary>
        /// Create an error response.
        /// </summary>
        /// <param name="message">Error message</param>
        public UserResponse(string message) : this(false, message, null) { }
    }
}
