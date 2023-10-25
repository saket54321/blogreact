import React from 'react'
import{Container,Logo,Logoutbtn} from "../index"
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  //state.auth.status==state.someReducer.basename
  //state: This typically refers to the global state managed by Redux. 
  //Redux is a state management library commonly used in React 
  //applications to manage application state in a predictable and centralized manner.
  // someReducer: This refers to a specific reducer in your Redux store. 
  // Reducers are functions that specify how the state changes in response to actions. 
  // The someReducer is one of the reducers defined in your Redux application.
  // basename: This is the property within the state that you want to access. 
  // It could be a piece of data or a value stored in your Redux store.

//someReducer: This refers to a specific reducer in your Redux store. Reducers are functions that specify how the state changes in response to actions. The someReducer is one of the reducers defined in your Redux application.

//basename: This is the property within the state that you want to access. It could be a piece of data or a value stored in your Redux store
  const authStatus = useSelector((state) => state.auth.status)
  //const authStatus=true;
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              //n React, the key attribute is used to assign a unique identifier to each element in an array of elements, 
              //typically when you are rendering a list of items using the map() 
              // It helps React identify and efficiently 
              //update the elements in the list when there are changes in the data
              //When an array of elements is re-rendered, React uses the key to determine which elements have changed, 
              //been added, or been removed
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            
            {authStatus && (
              //If authStatus is true (or evaluates to true), it will render the following JSX code
              //If authStatus is false, nothing will be rendered, and it will effectively skip the rendering of the <li> and Logoutbtn components.
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header