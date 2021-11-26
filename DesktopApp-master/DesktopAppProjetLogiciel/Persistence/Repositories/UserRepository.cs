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
    public class UserRepository:BaseRepository, IUserRepository
    {
        public UserRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
        /// <summary>
        /// This method list data from table Users in db and track them
        /// </summary>
        /// <returns>Task with all data because it is asynchronous</returns>
        public async Task<IEnumerable<User>> ListAsyncWithTracking()
        {
            return await _dbContext.Users.ToListAsync();
        }
        /// <summary>
        /// This method list data from table Users in db
        /// </summary>
        /// <returns>Task with all data because it is asynchronous</returns>
        public async Task<IEnumerable<User>> ListAsync()
        {
            var a = await _dbContext.Users.AsNoTracking().ToListAsync();
            track(a);
            return a;

        }
        /// <summary>
        /// This method create an entity from table Users in db them
        /// </summary>
        /// <param name="user">user to create</param>
        public async Task AddAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
        }
        /// <summary>
        /// This search data from table Users in db with id
        /// </summary>
        /// <param name="id">id of searched user</param>
        /// <returns>Task with found data because it is asynchronous</returns>
        public async Task<User> FindByIdAsync(int id)
        {
            return await _dbContext.Users.FindAsync(id);
        }
        /// <summary>
        /// This method update an entity from table Users in db them
        /// </summary>
        /// <param name="user">user to update</param>
        public void Update(User user)
        {
            _dbContext.Users.Update(user);
        }
        /// <summary>
        /// This method remove an entity from table Users in db
        /// </summary>
        /// <param name="user">user to delete</param>
        public void Remove(User user)
        {
            _dbContext.Users.Remove(user);
        }
        /// <summary>
        /// This search data from table Users in db with name
        /// </summary>
        /// <param name="name">name of searched user</param>
        /// <returns>List with all data return by the db</returns>
        public List<User> FindByName(string name)
        {
            var a = _dbContext.Users.AsNoTracking().Where(user =>
                user.NameUser == name).ToList();
            track(a);
            return a;
        }
        /// <summary>
        /// This search data from table Users in db with email
        /// </summary>
        /// <param name="email">email of searched user</param>
        /// <returns>List with all data return by the db</returns>
        public List<User> FindByEmail(string email)
        {
            var a = _dbContext.Users.AsNoTracking().Where(user =>
                user.Email == email).ToList();
            track(a);
            return a;
        }
        /// <summary>
        /// This method track data from table Users in db
        /// </summary>
        /// <param name="users">List of User</param>
        private void track(List<User> users)
        {
            try
            {
                _dbContext.Attach(users).State = EntityState.Modified;
            }
            catch (Exception e)
            {
                try
                {
                    _dbContext.Attach(users).State = EntityState.Unchanged;
                }
                catch (Exception e2)
                {

                }
            }
        }
    }
}
