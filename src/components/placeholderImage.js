import React from "react";

const PlaceholderImage = (props) => {
    const { width = 300, height = 300 } = props;

    const urlTemplate = process.env.IMAGE_PLACEHOLDER_SERVICE_URL;

    if (!urlTemplate) {
        console.error("Image placeholder service not defined!");
        return null;
    }

    const finalUrl = urlTemplate.replace("${w}", width).replace("${h}", height);

    return <img src={finalUrl} />;
};

export default PlaceholderImage;
