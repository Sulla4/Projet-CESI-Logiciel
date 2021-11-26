using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services
{
    public interface IUserService
    {
        public Task<IEnumerable<User>> ListAsync();
        public Task<IEnumerable<User>> ListAsyncWithTracking();
        public Task<UserResponse> SaveAsync(User user);
        public Task<UserResponse> UpdateAsync(int id, User user);
        public Task<UserResponse> DeleteAsync(int id);
        public Task<UserResponse> FindByIdAsync(int id);
        public UserResponse FindByEmail(string email);
    }
}
