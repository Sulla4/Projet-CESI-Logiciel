using DesktopAppProjetLogiciel.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Repositories
{
    public interface IRoleRepository
    {
        public Task<IEnumerable<Role>> ListAsync();
        public Task AddAsync(Role role);
        public Task<Role> FindByIdAsync(string id);
        public void Update(Role role);
        public void Remove(Role role);
    }
}
