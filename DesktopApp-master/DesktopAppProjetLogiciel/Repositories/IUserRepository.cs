using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DesktopAppProjetLogiciel.Models;

namespace DesktopAppProjetLogiciel.Repositories
{
    public interface IUserRepository
    {
        public Task<IEnumerable<User>> ListAsync();
        public Task<IEnumerable<User>> ListAsyncWithTracking();
        public Task AddAsync(User user);
        public Task<User> FindByIdAsync(int id);
        public void Update(User user);
        public void Remove(User user);
        public List<User> FindByEmail(string email);
    }
}
