// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  LeftIconTriggered = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  RightIconTriggered = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="heading_review">Reviews</h1>
          <div className="itemsContainer">
            <button
              type="button"
              onClick={this.LeftIconTriggered}
              className="btnEl"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="RighttIcon"
                alt="left arrow"
              />
            </button>
            <div className="bodyContainer">
              <img src={`${imgUrl}`} className="ProfilePhoto" alt={username} />
              <p>{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              type="button"
              onClick={this.RightIconTriggered}
              className="btnEl"
               data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="RighttIcon"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
