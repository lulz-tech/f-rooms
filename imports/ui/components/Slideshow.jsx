import React from "react";

export class Slideshow extends React.Component {

    renderSlides = () => {
        return this.props.rooms.map((room, key) => (
            <li key={key}>
                <img src={room.preview} alt="" uk-cover="true" />

                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 className="uk-margin-remove">{room.title}</h3>
                    <p className="uk-margin-remove">{room.description}</p>
                </div>
            </li>
        ));
    }

    render() {
        return (
            <div>
                <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade; autoplay: true; ratio: 7:3">
                    <ul className="uk-slideshow-items">
                        {this.renderSlides()}
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        );
    }
}