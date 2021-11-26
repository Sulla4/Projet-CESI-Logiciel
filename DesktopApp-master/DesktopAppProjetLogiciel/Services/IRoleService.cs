using DesktopAppProjetLogiciel.Models;
using DesktopAppProjetLogiciel.Services.Communication;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Services
{
    public interface IRoleService
    {
        public Task<IEnumerable<Role>> ListAsync();
        public Task<RoleResponse> SaveAsync(Role role);
        public Task<RoleResponse> UpdateAsync(string id, Role role);
        public Task<RoleResponse> DeleteAsync(string id);
        public Task<RoleResponse> FindByIdAsync(string id);
    }
}
