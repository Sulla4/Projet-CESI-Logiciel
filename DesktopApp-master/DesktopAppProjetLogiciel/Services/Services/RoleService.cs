using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Repositories;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        private readonly IUnitOfWork _unitOfWork;
        public RoleService(IRoleRepository roleRepository, IUnitOfWork unitOfWork)
        {
            _roleRepository = roleRepository;
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// This method remove an entity from table Roles in db and save changes
        /// </summary>
        /// <param name="id">id of role to delete</param>
        /// <returns>Task with RoleResponse because it is asynchronous</returns>
        public async Task<RoleResponse> DeleteAsync(string id)
        {
            Role existingRole = await _roleRepository.FindByIdAsync(id);
            if (existingRole == null)
            {
                return new RoleResponse("Role not found");
            }

            try
            {
                _roleRepository.Remove(existingRole);
                await _unitOfWork.CompleteAsync();
                return new RoleResponse(existingRole);
            }
            catch (Exception e)
            {
                return new RoleResponse($"An error occurred when deleting the role : {e.Message}");
            }
        }
        /// <summary>
        /// This method get an entity from table Users in db
        /// </summary>
        /// <param name="id">id of role to find</param>
        /// <returns>Task with RoleResponse because it is asynchronous</returns>
        public async Task<RoleResponse> FindByIdAsync(string id)
        {
            Role role = await _roleRepository.FindByIdAsync(id);
            if (role == null)
            {
                return new RoleResponse("Role not found");
            }
            return new RoleResponse(role);
        }
        /// <summary>
        /// This method list all entity from table Roles in db
        /// </summary>
        /// <returns>Task with all data found because it is asynchronous</returns>
        public async Task<IEnumerable<Role>> ListAsync()
        {
            return await _roleRepository.ListAsync();
        }
        /// <summary>
        /// This method create an entity from table Roles in db and save changes
        /// </summary>
        /// <param name="role">role to create</param>
        /// <returns>Task with RoleResponse because it is asynchronous</returns>
        public async Task<RoleResponse> SaveAsync(Role role)
        {
            try
            {
                await _roleRepository.AddAsync(role);
                await _unitOfWork.CompleteAsync();
                return new RoleResponse(role);
            }
            catch (Exception e)
            {
                return new RoleResponse(e.Message);
            }
        }
        /// <summary>
        /// This method update an entity from table Roles in db and save changes
        /// </summary>
        /// <param name="id">id of user to update</param>
        /// <param name="role">role infos to update</param>
        /// <returns>Task with RoleResponse because it is asynchronous</returns>
        public Task<RoleResponse> UpdateAsync(string id, Role role)
        {
            throw new NotImplementedException();
        }
    }
}
