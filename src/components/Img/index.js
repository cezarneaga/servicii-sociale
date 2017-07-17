import React from 'react'
import PropTypes from 'prop-types'
const Img = props =>
	<img className={props.className} src={props.src} alt={props.alt} />
Img.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
}
export default Img
