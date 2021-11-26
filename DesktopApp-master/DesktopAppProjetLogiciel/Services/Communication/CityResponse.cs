using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Services.Communication
{
    public class CityResponse:BaseResponse
    {
        public City City { get; private set; }
        private CityResponse(bool success, string message, City city) : base(success, message)
        {
            City = city;
        }
        /// <summary>
        /// Create a success response.
        /// </summary>
        /// <param name="city">Saved extraction</param>
        public CityResponse(City city) : this(true, string.Empty, city) { }
        /// <summary>
        /// Create an error response.
        /// </summary>
        /// <param name="message">Error message</param>
        public CityResponse(string message) : this(false, message, null) { }
    }
}
