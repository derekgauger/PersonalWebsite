import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }: { imgUrl: string, imgTitle: string }) {
    return (
        <div className="carousel-card">
            <img src={imgUrl} alt={imgTitle}></img>
        </div>
    );
}