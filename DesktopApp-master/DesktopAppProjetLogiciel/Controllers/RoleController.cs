using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Controllers
{
    public class RoleController:BaseController
    {
        /// <summary>
        /// This method list all entity from table Roles in db
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<string[]> ListAsync()
        {
            IEnumerable<Role> roles = await _roleService.ListAsync();
            List<string> names = new List<string>();
            foreach (Role role in roles)
            {
                names.Add(role.IdRole);
            }
            return names.ToArray();
        }
        /// <summary>
        /// This method create a role
        /// </summary>
        /// <param name="role">role info to create</param>
        /// <returns>Task with a message because it is asynchronous</returns>
        public async Task<string> PostAsync(Role role)
        {
            RoleResponse roleResponse = await _roleService.FindByIdAsync(role.IdRole);
            if (roleResponse.Success)
            {
                return $@"Role { role.IdRole} already exist";
            }
            RoleResponse roleResponse1 = await _roleService.SaveAsync(role);
            if (!roleResponse1.Success)
            {
                return $@"Role { role.IdRole} can't be created. Please contact your administrator";
            }
            return "";
        }
    }
}
