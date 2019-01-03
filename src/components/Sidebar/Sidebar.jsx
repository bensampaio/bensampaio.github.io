import React from 'react';
import { NavLink } from 'react-router-dom';

import me from '../../../db/me';

const Sidebar = React.memo(() => (
    <aside>
        <header>
            <NavLink exact={true} to={'/'}>
                <img src={me.picture} />
                <h1>{me.fullName}</h1>
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
                        © {new Date().getFullYear()} {me.fullName}
                    </li>
                </ul>
            </nav>
        </footer>
    </aside>
));

export default Sidebar;