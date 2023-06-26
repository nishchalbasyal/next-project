"use client"
import React from 'react';
import Image from "next/image";

const Post = ({image, title }) => {
  return (
    <div className="post_container">
        <div className="heading">
            <Image 
                src={"/profile.png"}
                width={30}
                height={30}
                alt="author_Profile"
            />
            <span>{title}</span>
        </div>
        <div className="post_content">
            <Image 
                src={image}
                width={240}
                height={350}
                alt="author_Profile"
            />
        </div>
        <div className="social_share">
            <button type="button">Like</button>
            <button type="button">Share</button>
            <button type="button">Comments</button>
        </div>
    </div>
  )
}

export default Post
