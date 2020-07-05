import React from 'react';
import Link from 'gatsby-link';
import ReactModal from "react-modal";
import './inline-post.sass';

const imagePlaceholder = 'https://bulma.io/images/placeholders/1280x960.png';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '30px',
  }
};

export default class InlinePost extends React.Component {  
  constructor() {
    super()
    this.state = {
      isModalOpen: false
    }
  }

  handleModalOpen = event => {
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    this.setState({ isModalOpen: false })
  }

  imageColumn = responsiveClass => {
    const { image, tag, title } = this.props;
    return (
      <div className={`column ${responsiveClass}`}>
        <figure className="image">
          <img src={image || imagePlaceholder} alt={title} />
          <div className={`image-filter-background ${tag}`}></div>
        </figure>
      </div>
    )
  }

  render() {
    const { isLeft, isPrivate, path, title, description, image, tag } = this.props;
    return (
      <div className={`inline-post columns ${isLeft? 'left': 'right'}`}>
        {isLeft && this.imageColumn('is-two-fifths is-hidden-mobile')}
        {this.imageColumn('is-hidden-tablet')}
        <div className="inline-post-content column">
          <h2 className="title is-size-3">{title}</h2>
          <p>{description}</p>
          <p>
            {!isPrivate && (
              <Link to={path} className="inline-post-learn-more button is-medium is-link">VIEW DETAILS</Link>
            )}
            {isPrivate && (
              <React.Fragment>
                <button onClick={this.handleModalOpen} className="inline-post-learn-more button is-medium is-link">LEARN MORE</button>
                <ReactModal
                  isOpen={this.state.isModalOpen}
                  onRequestClose={this.handleModalClose}
                  contentLabel="Learn More"
                  style={customStyles}
                >
                  <h2><b>Hi there!</b></h2>
                  <br/>
                  <p>This piece isn't available publicly.</p>
                  <p>Please <Link to="/contact" className="text">contact me</Link> to learn more about this piece.</p>
                  <br/>
                  <p>Thank you for your interest on my work.</p>
                  <br/>
                  <p><button onClick={this.handleModalClose} className="inline-post-learn-more button is-medium is-link">GOT IT</button></p>
                </ReactModal>
              </React.Fragment>
            )}
          </p>
        </div>
        {!isLeft && this.imageColumn('is-two-fifths is-hidden-mobile')}
      </div>
    );
  }
}