using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Repositories;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services.Services
{
    public class CityService : ICityService
    {
        private readonly ICityRepository _cityRepository;
        private readonly IUnitOfWork _unitOfWork;
        public CityService(ICityRepository cityRepository, IUnitOfWork unitOfWork)
        {
            _cityRepository = cityRepository;
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// This method remove an entity from table Cities in db and save changes
        /// </summary>
        /// <param name="id">id of city to delete</param>
        /// <returns>Task with CityResponse because it is asynchronous</returns>
        public async Task<CityResponse> DeleteAsync(int id)
        {
            City existingCity = await _cityRepository.FindByIdAsync(id);
            if (existingCity == null)
            {
                return new CityResponse("City not found");
            }

            try
            {
                _cityRepository.Remove(existingCity);
                await _unitOfWork.CompleteAsync();
                return new CityResponse(existingCity);
            }
            catch (Exception e)
            {
                return new CityResponse($"An error occurred when deleting the city: {e.Message}");
            }
        }
        /// <summary>
        /// This method get an entity from table Cities in db
        /// </summary>
        /// <param name="id">cp of city to find</param>
        /// <returns>Task with CityResponse because it is asynchronous</returns>
        public async Task<CityResponse> FindByIdAsync(int id)
        {
            City existingCity = await _cityRepository.FindByIdAsync(id);
            if (existingCity == null)
            {
                return new CityResponse("city not found");
            }
            return new CityResponse(existingCity);
        }
        /// <summary>
        /// This method list all entity from table Cities in db
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<City>> ListAsync()
        {
            return await _cityRepository.ListAsync();
        }
        /// <summary>
        /// This method create an entity from table Cities in db and save changes
        /// </summary>
        /// <param name="city">city to create</param>
        /// <returns>Task with CityResponse because it is asynchronous</returns>
        public async Task<CityResponse> SaveAsync(City city)
        {
            try
            {
                await _cityRepository.AddAsync(city);
                await _unitOfWork.CompleteAsync();
                return new CityResponse(city);
            }
            catch (Exception e)
            {
                return new CityResponse(e.Message);
            }
        }
        /// <summary>
        /// This method update an entity from table Cities in db and save changes
        /// </summary>
        /// <param name="id">cp of city to update</param>
        /// <param name="city">city infos to update</param>
        /// <returns>Task with CityResponse because it is asynchronous</returns>
        public async Task<CityResponse> UpdateAsync(int id, City city)
        {
            City existingCity = await _cityRepository.FindByIdAsync(id);
            if (existingCity == null)
            {
                return new CityResponse("City not found");
            }

            if (existingCity.NameCity != city.NameCity && city.NameCity != String.Empty)
            {
                existingCity.NameCity = city.NameCity;
            }
            try
            {
                _cityRepository.Remove(existingCity);
                await _unitOfWork.CompleteAsync();
                return new CityResponse(existingCity);
            }
            catch (Exception e)
            {
                return new CityResponse($"An error occurred when updating the city: {e.Message}");
            }
        }
        /// <summary>
        /// This method get an entity from table Cities in db with city name
        /// </summary>
        /// <param name="cityName">name of city to find</param>
        /// <returns>CityResponse</returns>
        public CityResponse FindByCityName(string cityName)
        {
            List<City> existingCity = _cityRepository.FindByCityName(cityName);
            if (existingCity == null)
            {
                return new CityResponse("city not found");
            }
            return new CityResponse(existingCity[0]);
        }
        /// <summary>
        /// This method list all entity from table Roles in db and track them
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<City>> ListAsyncWithTracking()
        {
            return await _cityRepository.ListAsyncWithTracking();
        }
    }
}
