import React from 'react';
import { NavLink } from 'react-router-dom';

import my from '../../../db/my.json';

const Sidebar = React.memo(() => (
    <aside>
        <header>
            <NavLink exact={true} to={'/'}>
                <img src={my.picture} />
                <h1>{my.fullName}</h1>
            </NavLink>
        </header>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/experience'}>
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/education'}>
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/projects'}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/about'}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        © {new Date().getFullYear()} {my.fullName}
                    </li>
                </ul>
            </nav>
        </footer>
    </aside>
));

export default Sidebar;