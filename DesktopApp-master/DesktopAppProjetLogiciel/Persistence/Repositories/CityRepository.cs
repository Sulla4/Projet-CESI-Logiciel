using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Persistence.Contexts;
using DesktopAppProjetLogiciel.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Persistence.Repositories
{
    public class CityRepository:BaseRepository, ICityRepository
    {
        public CityRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
        /// <summary>
        /// This method list data from table Cities in db and track them
        /// </summary>
        /// <returns>Task with all data because it is asynchronous</returns>
        public async Task<IEnumerable<City>> ListAsyncWithTracking()
        {
            return await _dbContext.Cities.ToListAsync();
        }
        /// <summary>
        /// This method list data from table Cities in db
        /// </summary>
        /// <returns>Task with all data because it is asynchronous</returns>
        public async Task<IEnumerable<City>> ListAsync()
        {
            var a = await _dbContext.Cities.AsNoTracking().ToListAsync();
            track(a);
            return a;
        }
        /// <summary>
        /// This method create an entity from table Cities in db them
        /// </summary>
        /// <param name="city">city to create</param>
        public async Task AddAsync(City city)
        {
            await _dbContext.Cities.AddAsync(city);
        }
        /// <summary>
        /// This search data from table Cities in db with id
        /// </summary>
        /// <param name="id">cp of searched city</param>
        /// <returns>Task with found data because it is asynchronous</returns>
        public async Task<City> FindByIdAsync(int id)
        {
            return await _dbContext.Cities.FindAsync(id);
        }
        /// <summary>
        /// This search data from table Cities in db with city name
        /// </summary>
        /// <param name="cityName">city name of searched user</param>
        /// <returns>List with all data return by the db</returns>
        public List<City> FindByCityName(string cityName)
        {
            return _dbContext.Cities.AsNoTracking().Where(city => city.NameCity == cityName).ToList();
        }
        /// <summary>
        /// This method update an entity from table Cities in db them
        /// </summary>
        /// <param name="city">city to update</param>
        public void Update(City city)
        {
            _dbContext.Cities.Update(city);
        }
        /// <summary>
        /// This method remove an entity from table Cities in db
        /// </summary>
        /// <param name="city">city to delete</param>
        public void Remove(City city)
        {
            _dbContext.Cities.Remove(city);
        }
        /// <summary>
        /// This method track data from table Cities in db
        /// </summary>
        /// <param name="cities">List of City</param>
        private void track(List<City> cities)
        {
            try
            {
                _dbContext.Attach(cities).State = EntityState.Modified;
            }
            catch (Exception e)
            {
                try
                {
                    _dbContext.Attach(cities).State = EntityState.Unchanged;
                }
                catch (Exception e2)
                {

                }
            }
        }
    }
}
