using DesktopAppProjetLogiciel.Persistence.Contexts;
using DesktopAppProjetLogiciel.Persistence.Repositories;
using DesktopAppProjetLogiciel.Repositories;
using DesktopAppProjetLogiciel.Services;
using DesktopAppProjetLogiciel.Services.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Controllers
{
    public abstract class BaseController
    {
        protected AppDbContext _appDBContext;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRoleRepository _roleRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IUserRepository _userRepository;
        protected readonly ICityService _cityService;
        protected readonly IRoleService _roleService;
        protected readonly IUserService _userService;
        public BaseController()
        {
            _appDBContext = new AppDbContext();
            _unitOfWork = new UnitOfWork(_appDBContext);
            _cityRepository = new CityRepository(_appDBContext);
            _roleRepository = new RoleRepository(_appDBContext);
            _userRepository = new UserRepository(_appDBContext);
            _cityService = new CityService(_cityRepository, _unitOfWork);
            _roleService = new RoleService(_roleRepository, _unitOfWork);
            _userService = new UserService(_userRepository, _unitOfWork);
        }
    }
}
