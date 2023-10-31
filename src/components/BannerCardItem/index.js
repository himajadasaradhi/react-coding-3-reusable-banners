// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <div className="card-container">
      <li className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </li>
    </div>
  )
}
export default BannerCardItem
