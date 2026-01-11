import React from 'react'

const Section = ({title, children, ...props}) => {
  return (
    // 1- This id = {id} because the id taken in Section component when used dont get forwarded automatically to this section
   // 2- {...props} : this ensures that any other props are taken will be used, instead of writing them ourselves for example id, description, etc..
   <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section