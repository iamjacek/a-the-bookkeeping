import React from "react";
import PropTypes from "prop-types";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import "../css/style.scss";

const Share = ({ socialConfig, tags }) => (
  <div className="post-social">
    <FacebookShareButton
      url={socialConfig.location.href}
      className="button is-outlined is-rounded facebook"
    >
      <span className="icon">
        <FacebookIcon size={30} round={false} borderRadius="5" />
      </span>
    </FacebookShareButton>
    <TwitterShareButton
      url={socialConfig.location.href}
      className="button is-outlined is-rounded twitter"
      title={socialConfig.title}
      via={socialConfig.twitterHandle.split("@").join("")}
      hashtags={tags}
    >
      <span className="icon">
        <TwitterIcon size={30} round={false} borderRadius="5" />
      </span>
    </TwitterShareButton>
    <LinkedinShareButton
      url={socialConfig.location.href}
      className="button is-outlined is-rounded linkedin"
      title={socialConfig.title}
    >
      <span className="icon">
        <LinkedinIcon size={30} round={false} borderRadius="5" />
      </span>
    </LinkedinShareButton>
    <WhatsappShareButton
      url={socialConfig.location.href}
      className="button is-outlined is-rounded whatsapp"
      title={socialConfig.title}
    >
      <span className="icon">
        <WhatsappIcon size={30} round={false} borderRadius="5" />
      </span>
    </WhatsappShareButton>
  </div>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
Share.defaultProps = {
  tags: []
};

export default Share;
