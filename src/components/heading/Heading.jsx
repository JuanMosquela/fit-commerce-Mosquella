import './heading.css'

const Heading = ({ title }) => {
  return (
    <div className="heading-container">
        <h2 className="heading">
          {title}
        </h2>
        <p> Proteins there are very variations</p>
    </div>
  )
}
export default Heading