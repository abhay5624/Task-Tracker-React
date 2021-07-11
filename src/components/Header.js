
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const Click = () => {
        console.log('btn get a click');
    }
    return (
       <header className='header'>
          <h1>{title}</h1> 
          <Button color='green' text= 'Add' onClick= {Click}/>
          </header>
    )
}

Header.defaultProps = {
    title: 'Tasks Tracker',
}
Header.prototype = {
    title: PropTypes.string.isRequired,
}
export default Header
