import React from 'react'


//In React, the children prop is a special prop that represents the content enclosed 
//within the opening and closing tags of a component when it's used.
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container