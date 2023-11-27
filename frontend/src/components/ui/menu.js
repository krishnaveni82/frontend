import React, { useState } from 'react';


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <menu>
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => setIsOpen(!isOpen)}>Menu</a>
          {isOpen && (
            <ul>
              <li>
                <a href="/submenu1">Submenu 1</a>
              </li>
              <li>
                <a href="/submenu2">Submenu 2</a>
              </li>
              <li>
                <a href="/submenu3">Submenu 3</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
    </menu>
  );
};









