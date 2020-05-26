import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NO_IMG_URL } from '../../constants';
import './Image.scss';

export class Image extends PureComponent {
    constructor(props = {}) {
        super(props);
        this.state = {
            src: props.src || NO_IMG_URL,
        };
    }

    updateImgOnError() {
        this.setState({ src: NO_IMG_URL });
    }

    render() {
        const { src } = this.state;
        const { alt, title, incomeClasses, incomeWrapClasses } = this.props;

        return (
            <span className={`img-wrap ${incomeWrapClasses}`}>
                <img src={src} alt={alt || title} title={title}
                    className={`img ${incomeClasses}`} onError={this.updateImgOnError.bind(this)}/>
            </span>
        );
    }
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    incomeClasses: PropTypes.string,
    incomeWrapClasses: PropTypes.string,
};

Image.defaultProps = {
    incomeClasses: '',
    incomeWrapClasses: '',
};