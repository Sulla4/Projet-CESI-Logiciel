using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Repositories;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;
        public UserService(IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// This method remove an entity from table Users in db and save changes
        /// </summary>
        /// <param name="id">id of user to delete</param>
        /// <returns>Task with UserResponse because it is asynchronous</returns>
        public async Task<UserResponse> DeleteAsync(int id)
        {
            User exstingUser = await _userRepository.FindByIdAsync(id);
            if (exstingUser == null)
            {
                return new UserResponse("User not found");
            }

            try
            {
                //_userRepository.Remove(exstingUser);
                exstingUser.FirstnameUser = String.Empty;
                exstingUser.LastnameUser = String.Empty;
                exstingUser.NameUser = "Utilisateur suprimé";
                exstingUser.Email = String.Empty;
                exstingUser.AddressUser = String.Empty;
                exstingUser.UserPhone = String.Empty;
                exstingUser.SiretUser = 0;

                await _unitOfWork.CompleteAsync();
                return new UserResponse(exstingUser);
            }
            catch (Exception e)
            {
                return new UserResponse($"An error occurred when deleting the user : {e.Message}");
            }
        }
        /// <summary>
        /// This method get an entity from table Users in db
        /// </summary>
        /// <param name="id">id of user to find</param>
        /// <returns>Task with UserResponse because it is asynchronous</returns>
        public async Task<UserResponse> FindByIdAsync(int id)
        {
            User user = await _userRepository.FindByIdAsync(id);
            if (user == null)
            {
                return new UserResponse("User not found");
            }
            return new UserResponse(user);
        }
        /// <summary>
        /// This method list all entity from table Users in db
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<User>> ListAsync()
        {
            return await _userRepository.ListAsync();
        }
        /// <summary>
        /// This method create an entity from table Users in db and save changes
        /// </summary>
        /// <param name="user">user to create</param>
        /// <returns>Task with UserResponse because it is asynchronous</returns>
        public async Task<UserResponse> SaveAsync(User user)
        {
            try
            {
                await _userRepository.AddAsync(user);
                await _unitOfWork.CompleteAsync();
                return new UserResponse(user);
            }
            catch (Exception e)
            {
                return new UserResponse(e.Message);
            }
        }
        /// <summary>
        /// This method update an entity from table Users in db and save changes
        /// </summary>
        /// <param name="id">id of user to update</param>
        /// <param name="user">user infos to update</param>
        /// <returns>Task with UserResponse because it is asynchronous</returns>
        public async Task<UserResponse> UpdateAsync(int id, User user)
        {
            User existingUser = await _userRepository.FindByIdAsync(id);
            if (existingUser == null)
            {
                return new UserResponse("User not found");
            }
            if(existingUser.FirstnameUser!=user.FirstnameUser && user.FirstnameUser != String.Empty)
            {
                existingUser.FirstnameUser = user.FirstnameUser;
            }
            if (existingUser.LastnameUser != user.LastnameUser && user.LastnameUser != String.Empty)
            {
                existingUser.LastnameUser = user.LastnameUser;
            }
            if (existingUser.NameUser != user.NameUser && user.NameUser != String.Empty)
            {
                existingUser.NameUser = user.NameUser;
            }
            if (existingUser.AddressUser != user.AddressUser && user.AddressUser != String.Empty)
            {
                existingUser.AddressUser = user.AddressUser;
            }
            if (existingUser.Email != user.Email && user.Email != String.Empty)
            {
                existingUser.Email = user.Email;
            }
            if (existingUser.UserPhone != user.UserPhone && user.UserPhone != String.Empty)
            {
                existingUser.UserPhone = user.UserPhone;
            }
            if (existingUser.MpUser != user.MpUser && user.MpUser != String.Empty)
            {
                existingUser.MpUser = user.MpUser;
            }
            if (existingUser.Role_IdRole != user.Role_IdRole && user.Role_IdRole != String.Empty)
            {
                existingUser.Role_IdRole = user.Role_IdRole;
            }
            if (existingUser.SiretUser != user.SiretUser && user.SiretUser != 0)
            {
                existingUser.SiretUser = user.SiretUser;
            }
            if (existingUser.PointsUser != user.PointsUser && user.PointsUser != 0)
            {
                existingUser.PointsUser = user.PointsUser;
            }
            if (existingUser.CpCityId != user.CpCityId && user.CpCityId != 0)
            {
                existingUser.CpCityId = user.CpCityId;
            }
            if (existingUser.IsSponsorUser != user.IsSponsorUser && user.IsSponsorUser != false)
            {
                existingUser.IsSponsorUser = user.IsSponsorUser;
            }
            if (existingUser.IsSponsorisedUser != user.IsSponsorisedUser && user.IsSponsorisedUser != false)
            {
                existingUser.IsSponsorisedUser = user.IsSponsorisedUser;
            }
            try
            {
                _userRepository.Update(existingUser);
                await _unitOfWork.CompleteAsync();
                return new UserResponse(existingUser);
            }
            catch (Exception e)
            {
                return new UserResponse($"An error occurred when updating the user: {e.Message}");
            }
        }
        /// <summary>
        /// This method get an entity from table Users in db with email
        /// </summary>
        /// <param name="email">email of user to find</param>
        /// <returns>UserResponse</returns>
        public UserResponse FindByEmail(string email)
        {
            List<User> users = _userRepository.FindByEmail(email);
            if (!users.Any())
            {
                return new UserResponse("client not found");
            }
            return new UserResponse(users[0]);
        }
        /// <summary>
        /// This method list all entity from table Users in db and track them
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<User>> ListAsyncWithTracking()
        {
            return await _userRepository.ListAsyncWithTracking();
        }
    }
}
