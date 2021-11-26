using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services
{
    public interface ICityService
    {
        public Task<IEnumerable<City>> ListAsync();
        public Task<IEnumerable<City>> ListAsyncWithTracking();
        public Task<CityResponse> SaveAsync(City city);
        public Task<CityResponse> UpdateAsync(int id, City city);
        public Task<CityResponse> DeleteAsync(int id);
        public Task<CityResponse> FindByIdAsync(int id);
        public CityResponse FindByCityName(string cityName);
    }
}
