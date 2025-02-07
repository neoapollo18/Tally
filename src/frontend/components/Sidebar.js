import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCollapsed, setIsCollapsed } = useSidebar();
  

  const [clickedMenu, setClickedMenu] = useState(null);

  const menuItems = [
    { 
      name: 'Tally', 
      icon: '/Icons/LogoIcon.svg',
      path: '/' 
    },
    { 
      name: 'Materials', 
      icon: '/Icons/Components.svg',
      path: '/materials' 
    },
    { 
      name: 'Products', 
      icon: '/Icons/Products.svg',
      path: '/products' 
    },
    { 
      name: 'Fulfillment', 
      icon: '/Icons/Orders.svg',
      path: '/fulfillment' 
    },
    { 
      name: 'Integrations', 
      icon: '/Icons/Integrations.svg',
      path: '/integrations' 
    }
  ];

 
  const getMenuStyles = (isCollapsed) => ({
    Tally: {
      container: `text-[20px] font-[400] leading-6 text-[#444EAA] ${isCollapsed ? 'py-2' : '-mt-1'}`,
      icon: `${isCollapsed ? 'w-[48px] h-[48px]' : 'mr-3 w-14 h-14 -ml-4 mt-[2px]'}`,
      text: `${isCollapsed ? 'hidden' : 'w-[42px] h-[14px] block -ml-[17px] -mt-[8px] text-[#444EAA]'}`
    },
    Materials: {
      container: `text-[13px] font-[300] text-[#808080] ${isCollapsed ? '' : '-mt-[6px]'}`,
      icon: `${isCollapsed ? 'w-6 h-6' : 'mr-3 w-6 h-6'}`,
      text: isCollapsed ? 'hidden' : ''
    },
    Products: {
      container: `text-[13px] font-[300] text-[#808080] ${isCollapsed ? 'mt-4' : 'mt-[8px]'}`,
      icon: `${isCollapsed ? 'w-6 h-6' : 'mr-3 w-6 h-6'}`,
      text: isCollapsed ? 'hidden' : ''
    },
    Fulfillment: {
      container: `text-[13px] font-[300] text-[#808080] ${isCollapsed ? 'mt-4' : 'mt-[8px]'}`,
      icon: `${isCollapsed ? 'w-6 h-6' : 'mr-3 w-6 h-6'}`,
      text: isCollapsed ? 'hidden' : ''
    },
    Integrations: {
      container: `text-[13px] font-[300] text-[#808080] ${isCollapsed ? 'mt-4' : 'mt-[8px]'}`,
      icon: `${isCollapsed ? 'w-6 h-6' : 'mr-3 w-6 h-6'}`,
      text: isCollapsed ? 'hidden' : ''
    }
  });

  const menuStyles = getMenuStyles(isCollapsed);

  return (
    <div className={`fixed left-0 top-0 ${isCollapsed ? 'w-[64px]' : 'w-[230px]'} h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FAFAFA] border-r transition-all duration-300`}>
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute ${isCollapsed ? 'bottom-[120px] w-full' : 'top-4 right-4'} flex items-center justify-center py-3 text-gray-400 hover:text-gray-600 transition-all duration-300 z-20`}
      >
        <img 
          src="/Icons/arrow-right.svg" 
          alt="collapse" 
          className={`w-4 h-4 transform ${isCollapsed ? 'rotate-180' : ''}`}
        />
      </button>

      <nav className="flex flex-col h-full">
        <div className="flex-1">
          {menuItems.map((item, index) => {
            const isCurrentRoute = location.pathname === item.path;
            const isClicked = clickedMenu === item.name;
            const isTally = item.name === 'Tally';
            const isBeforeIntegrations = item.name === 'Fulfillment';

            return (
              <React.Fragment key={item.name}>
                <div
                  className={`relative ${isCollapsed ? 'w-[48px] mx-auto' : 'w-[212px]'}`}
                  onClick={() => {
                    if (!isTally) {
                      navigate(item.path);
                      setClickedMenu(item.name);
                    }
                  }}
                  style={{ cursor: isTally ? 'default' : 'pointer' }}
                >
                  <div
                    className={`absolute ${isCollapsed ? 'left-1' : 'left-4'} top-0 h-full ${isCollapsed ? 'w-[40px]' : 'w-[calc(100%-14px)]'} rounded-lg z-0 ${
                      isCurrentRoute && !isTally ? 'bg-[#F3F4FC] border border-[#DADCEE]' : ''
                    }`}
                  ></div>

                  <div
                    className={`relative flex items-center justify-${isCollapsed ? 'center' : 'start'} ${isCollapsed ? 'px-1.5' : 'px-6'} py-2.5 z-10
                      ${menuStyles[item.name]?.container || ''} 
                      ${!isTally && isClicked ? 'text-black font-light' 
                        : isCurrentRoute && !isTally ? 'text-[#444EAA] font-medium' 
                        : 'text-gray-700'}`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`${menuStyles[item.name]?.icon} ${
                        !isTally && isClicked ? 'brightness-0' : ''
                      }`}
                    />
                    <span className={menuStyles[item.name]?.text || ''}>
                      {!isCollapsed && item.name}
                    </span>
                  </div>
                </div>
                {isBeforeIntegrations && (
                  <div className={`${isCollapsed ? 'mx-3' : 'mx-6'} my-2 border-t border-gray-200`}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        <div className="mt-auto">
          <div className={`${isCollapsed ? 'px-2 text-center' : 'px-6'} py-3 cursor-pointer font-[300] text-[#A51818] hover:text-red-700 text-sm`}>
            <img src="/Images/logout.png" alt="logout" className={`${isCollapsed ? 'mx-auto' : 'inline mr-3 ml-2'} w-6 h-6`} />
            {!isCollapsed && <span>Logout</span>}
          </div>
          
          <div className={`${isCollapsed ? 'px-2' : 'px-6'} py-3 flex items-center justify-${isCollapsed ? 'center' : 'between'}`}>
            <div className="flex items-center">
              <div style={{backgroundColor: '#A03D3D33'}} className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/Images/image.png" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              {!isCollapsed && (
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">Don't Ruin It</div>
                  <div className="text-xs text-gray-500">Pro Crafter</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button className="text-gray-400 hover:text-gray-600">
                <span>⋯</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
