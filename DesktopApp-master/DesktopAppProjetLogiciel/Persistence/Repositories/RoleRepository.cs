using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Persistence.Contexts;
using DesktopAppProjetLogiciel.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Persistence.Repositories
{
    public class RoleRepository:BaseRepository, IRoleRepository
    {
        public RoleRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
        /// <summary>
        /// This method list data from table Roles in db and track them
        /// </summary>
        /// <returns>Task with all data because it is asynchronous</returns>
        public async Task<IEnumerable<Role>> ListAsync()
        {
            return await _dbContext.Roles.ToListAsync();
        }
        /// <summary>
        /// This method create an entity from table Roles in db them
        /// </summary>
        /// <param name="role">role to create</param>
        public async Task AddAsync(Role role)
        {
            await _dbContext.Roles.AddAsync(role);
        }
        /// <summary>
        /// This search data from table Roles in db with id
        /// </summary>
        /// <param name="id">id of searched role</param>
        /// <returns>Task with found data because it is asynchronous</returns>
        public async Task<Role> FindByIdAsync(string id)
        {
            return await _dbContext.Roles.FindAsync(id);
        }
        /// <summary>
        /// This method update an entity from table Role in db them
        /// </summary>
        /// <param name="role">role to update</param>
        public void Update(Role role)
        {
            _dbContext.Roles.Update(role);
        }
        /// <summary>
        /// This method remove an entity from table Role in db
        /// </summary>
        /// <param name="role">role to delete</param>
        public void Remove(Role role)
        {
            _dbContext.Roles.Remove(role);
        }
    }
}
