import PropTypes from 'prop-types';

const Item = (prop) => {
  const {title,amount} = prop
  return (
    <li> <span>{title}</span> <span>{amount}</span> </li>
  )
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}

export default Item