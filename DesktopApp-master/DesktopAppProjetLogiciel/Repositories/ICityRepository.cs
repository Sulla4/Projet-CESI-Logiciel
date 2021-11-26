using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Repositories
{
    public interface ICityRepository
    {
        public Task<IEnumerable<City>> ListAsync();
        public Task<IEnumerable<City>> ListAsyncWithTracking();
        public Task AddAsync(City city);
        public Task<City> FindByIdAsync(int id);
        public List<City> FindByCityName(string cityName);
        public void Update(City city);
        public void Remove(City city);
    }
}
