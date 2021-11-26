using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using BCrypt.Net;
using DesktopAppProjetLogiciel.Models;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Controllers
{
    public class UserController:BaseController
    {
        public UserController() : base() 
        {
            _userService.ListAsyncWithTracking();
        }
        /// <summary>
        /// This method check if the user can connect to the app
        /// </summary>
        /// <param name="email">email of user</param>
        /// <param name="password">password of user</param>
        /// <returns>true if he is authorized and false if not</returns>
        public bool CheckLogin(string email, string password)
        {
            UserResponse userResponse = _userService.FindByEmail(email);
            if (!userResponse.Success)
            {
                return false;
            }
            else if(BCrypt.Net.BCrypt.Verify(password, userResponse.User.MpUser) && (userResponse.User.Role_IdRole == "TECHNIQUE" || userResponse.User.Role_IdRole == "ServCom"))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        /// <summary>
        /// This method list all entity from table Users in db
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<User>> ListAsync()
        {
            return await _userService.ListAsyncWithTracking();
        }
        /// <summary>
        /// This method get an entity from table Users in db
        /// </summary>
        /// <param name="id">id of user to find</param>
        /// <returns>Task with User found because it is asynchronous</returns>
        public async Task<User> FindByIdAsync(int id)
        {
            UserResponse userResponse = await _userService.FindByIdAsync(id);
            if (userResponse.Success)
            {
                return userResponse.User;
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// This method update a user or create it if it don't exist
        /// </summary>
        /// <param name="user">user info to update or create</param>
        /// <param name="id">id of user to update or 0 if it don't exist</param>
        /// <returns>Task with a message because it is asynchronous</returns>
        public async Task<string> UpdateAndPostAsync(User user, int id)
        {
            RoleResponse roleResponse = await _roleService.FindByIdAsync(user.Role_IdRole);
            if (!roleResponse.Success)
            {
                RoleResponse roleResponse1 = await _roleService.SaveAsync(new Role { IdRole=user.Role_IdRole});
                if (!roleResponse1.Success)
                {
                    return $@"Role {user.Role_IdRole} does not exist and can't be created. Please contact your administrator";
                }
            }

            CityResponse cityResponse = await _cityService.FindByIdAsync(user.CpCityId);
            if (!cityResponse.Success)
            {
                CityResponse cityResponse1 = await _cityService.SaveAsync(new City { CpCity = user.CpCityId, NameCity = user.City.NameCity });
                if (!cityResponse1.Success)
                {
                    return $@"City {user.City.NameCity} does not exist and can't be created. Please contact your administrator";
                }
            }

            UserResponse userResponse = await _userService.FindByIdAsync(id);
            if (!userResponse.Success)
            {
                UserResponse userResponse1 = await _userService.SaveAsync(user);
                if (!userResponse1.Success)
                {
                    return $@"user { user.Email} can't be created. Please contact your administrator";
                }
            }
            else
            {
                UserResponse userResponse2 = await _userService.UpdateAsync(id, user);
                if (!userResponse2.Success)
                {
                    return $@"User {user.Email} can't be updated. Please contact your administrator";
                }
            }
            return "";            
        }
    }
}
