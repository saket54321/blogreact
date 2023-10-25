import React, {useId} from 'react'


//forwardRef function is used to forward a ref from a child component to a DOM element or 
//a child component deeper in the component tree
// This can be particularly useful when you want to access the DOM element or a child 
//component's instance from a parent or ancestor component.
//forwardRef((props, ref) this is a basic syntax
//forwardRef is a useful tool when you need to interact with a 
//child component from a parent component, especially 
//in cases where you need to access the DOM or methods of that child component.
// It helps create a more flexible and modular component structure.
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>            
            {label && <label 
            //To associate the label with the input field, we use the htmlFor attribute on the <label> element, and it points to the id of the input element. 
            //This creates a connection between the label and the input element.
            //When you click on the label, it will focus the associated input element, making your form more accessible and user-friendly. The htmlFor and id linkage is how screen readers and browsers know that the label is associated with the input field.

// Including labels in your forms is a 
// good practice, especially for accessibility. 
// It provides context and helps users understand the 
// purpose of the form fields, even when using assistive technologies like screen readers.






            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input