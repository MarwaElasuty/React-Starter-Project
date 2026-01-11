
const TabButton = ({children, isSelected, ...props}) => {
  return (
    <div>
      {/* Note that isSelected will give you true because in App.jsx we are asking if it's equal to 'components' or 'props' for example or not */}
        <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li>
    </div>
  )
}

export default TabButton