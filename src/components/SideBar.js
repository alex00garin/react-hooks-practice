'use client';

import { Sidebar } from 'flowbite-react'
import {  Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <Sidebar className='h-screen w-[200px] rounded-lg shadow-lg'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="Hooks" className='hover:bg-neutral-200'>
            <Sidebar.Item>
              <Link to="/useState">useState</Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to="/useEffect">useEffect</Link>
            </Sidebar.Item>
            <Sidebar.Item>
            <Link to="/useContext">useContext</Link>
            </Sidebar.Item>
            <Sidebar.Item>
            <Link to="/useRef">useRef</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


