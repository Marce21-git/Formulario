
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({facebook, github, linkedin}) => {
  return (
    <div className='cajalogos'>
      <button className='boton'>
        <i className={facebook}></i>
      </button>
      <button className='boton'>
        <i className={github}></i>
      </button>
      <button className='boton'>
        <i className={linkedin}></i>
      </button>
    </div>
  )
}

export default SocialButton