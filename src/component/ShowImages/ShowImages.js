import './ShowImages.css'

const ShowImages = props => {
  const {details, checkingOutput} = props
  const check = () => {
    checkingOutput(details.id)
  }
  return (
    <li>
      <button type="button" className="but" onClick={check}>
        <img src={details.thumbnailUrl} alt="thumbnail" className="imgSize" />
      </button>
    </li>
  )
}

export default ShowImages
