using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Controllers
{
    public class CityController: BaseController
    {
        public CityController()
        {
            _cityService.ListAsyncWithTracking();
        }
        /// <summary>
        /// This method get an entity from table Cities in db
        /// </summary>
        /// <param name="id">cp of city to find</param>
        /// <returns>Task with City found because it is asynchronous</returns>
        public async Task<City> FindByIdAsync(int id)
        {
            CityResponse cityResponse = await _cityService.FindByIdAsync(id);
            if (cityResponse.Success)
            {
                return cityResponse.City;
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// This method get an entity from table Cities in db with city name
        /// </summary>
        /// <param name="id">cp of city to find</param>
        /// <returns>City found</returns>
        public City FindByCityName(string cityName)
        {
            CityResponse cityResponse = _cityService.FindByCityName(cityName);
            if (cityResponse.Success)
            {
                return cityResponse.City;
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// This method list all entity from table Users in db
        /// </summary>
        /// <returns>Task with all city cp found because it is asynchronous</returns>
        public async Task<string[]> ListCityCpAsync()
        {
            IEnumerable<City> cities = await _cityService.ListAsync();
            List<string> cps = new List<string>();
            foreach(City city in cities)
            {
                cps.Add(city.CpCity.ToString());
            }
            return cps.ToArray();
        }
        /// <summary>
        /// This method list all entity from table Users in db
        /// </summary>
        /// <returns>Task with all city name found because it is asynchronous</returns>
        public async Task<string[]> ListCityNameAsync()
        {
            IEnumerable<City> cities = await _cityService.ListAsync();
            List<string> names = new List<string>();
            foreach (City city in cities)
            {
                names.Add(city.NameCity);
            }
            return names.ToArray();
        }

        /// <summary>
        /// This method update a city or create it if it don't exist
        /// </summary>
        /// <param name="city">city info to update or create</param>
        /// <param name="cpCity">cp of city to update or 0 if it don't exist</param>
        /// <returns>Task with a message because it is asynchronous</returns>
        public async Task<string> UpdateAndPostAsync(City city, int cpCity)
        {
            CityResponse cityResponse = await _cityService.FindByIdAsync(cpCity);
            if (!cityResponse.Success)
            {
                CityResponse cityResponse1 = await _cityService.SaveAsync(city);
                if (!cityResponse1.Success)
                {
                    return $@"City { city.NameCity} can't be created. Please contact your administrator";
                }
            }
            else
            {
                CityResponse cityResponse2 = await _cityService.UpdateAsync(cpCity, city);
                if (!cityResponse2.Success)
                {
                    return $@"City { city.NameCity} can't be updated. Please contact your administrator";
                }
            }
            return "";
        }
    }
}
