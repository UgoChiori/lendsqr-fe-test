import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationItems } from '../../storage/userdata';


interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

const SideNav: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const pathname: String = useLocation().pathname;
  const navigate = useNavigate();

  const isRouteactive = (route: String) => {
    if(pathname === '/dashboard' && route === '/dashboard') return true;
  }
  const path = pathname.split('/')[2];

  return (
    <div className="sidenav">
      <div className="sidenav__header">
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="">
        <ul className="sidenav__list">
          {navigationItems.map((item, index) => {
            return (
          <div key={item.id}>
            {!item.header ? (
              				<NavLink to={`${item.link}`}>
                      <li className={`side-nav-menu-item ${isRouteactive(item.link) && 'active'}`}>
                        {!item.header && <img src={item.icon} alt={item.title} />}
  
                        <span>{item.title}</span>
                        {item.id === 1 && (
                          <span>
                            <img src="/images/icons/down-arrow.svg" alt="" />
                          </span>
                        )}
                      </li>
                    </NavLink>
                  ) : (
                    <li className="nav-item-header">
                      <span>{item.title}</span>
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
  
          <div className="logout" onClick={() => navigate('/')}>
            <div>
              <img src="/images/icons/logout-icon.svg" alt="logout icon" />
              <span>Logout</span>
            </div>
  
            <span className="version">v1.2.0</span>
          </div>
        </div>
      </div>
    
            )
          }
                  
        
            

  
  
   
 
export default SideNav