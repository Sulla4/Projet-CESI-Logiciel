using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Repositories
{
    public interface IUnitOfWork
    {
        public Task CompleteAsync();
    }
}
