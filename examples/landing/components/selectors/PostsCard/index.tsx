import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React, { useState } from "react";
import styled from "styled-components";

import { PostsCardSettings } from "./PostsCardSettings";

// import { Text } from ""
// import BloggrsClient from 'bloggrs-api-client/dist/index.umd';
import { useEffect } from "react";

import BloggrsClient from "bloggrs-api-client";
import moment from "moment";

// const x default: BloggrsClient } = require("bloggrs-api-client");

const bloggrsClient = new BloggrsClient("dfaf8acf-6038-47ab-b870-8ae8bb29ae35")

type PostsCardProps = {
}

const LikeButton = ({ post, onSuccess }) => {
  const onClick = e => {
    e.preventDefault();
    // const { }
    const action = post.meta.liked ? 'unlike' : 'like'
    fetch(`${bloggrsClient.basePath}/blogs/${post.BlogId}/posts/${post.id}/${action}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("bloggrs::token")
      }
    })
      .then(res => res.json)
      .then(data => {
        console.log({ data })
        onSuccess({ action })
      })
  }
  return ( 
    <p className="w-1/2 text-blue-300 font-medium text-sm flex ">
      {
        post.meta.liked
        ? <img onClick={onClick} className="cursor-pointer" src="http://localhost:3001/dist/static/icons8-love-80-fill.png"/>
        : <img onClick={onClick} className="cursor-pointer" src="http://localhost:3001/dist/static/icons8-heart-80.png" />
      }
      <span className="mx-2 text-center my-2 cursor-pointer">{post.meta.likes_count} likes</span>
    </p>
  )
}

export const PostsCard: UserComponent<PostsCardProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    const { title, categories_count, display_posts_count } = props;

    const [ posts, setPosts ] = useState([]);
    useEffect(async () => {
      const { posts } = await bloggrsClient.posts.all();
      console.log({ bloggrsClient })
      setPosts(posts);
    },[])
    console.log({ posts })
    return (
      <>
        {
          title && <h1 
            className="text-slate-700 font-bold text-3xl"
            style={{ marginBottom: "2rem" }}
          >{title}</h1>
        }
        <div ref={connect} className="h-full grid grid-rows-3 grid-flow-col col-start-2 col-span-4 gap-4">
          {
            posts.map(post => (
              <div className="grid grid-rows-1 grid-cols-12 col-span-3 h-0.5/1 my-5">
                <div className="bg-white shadow-md rounded-md col-span-5" />
                <div className="px-3 col-span-7">
                  <h1 className="text-slate-700 font-medium text-xl">
                    { post.title }
                  </h1>
                  <p className="py-2 text-slate-400 font-normal text-sm"
                    style={{
                      minWidth: "409px",
                      minHeight: "70px"
                    }}
                  >
                    {
                      post.content_excerpt
                    } 
                  </p>
                  <div className="flex">
                    <p className=" text-slate-700 font-normal text-sm">
                      {moment(post.createdAt).format("dddd, MMMM, DD, YYYY")} &nbsp;&nbsp;&nbsp; |
                    </p>
                    <p className="mx-4 text-slate-700 font-normal text-sm">
                      Owner
                    </p>
                  </div>
                  <div className="flex  my-2 w-full">
                    <LikeButton post={post} onSuccess={({action}) => {
                      const { meta: { likes_count } } = post;
                      const liked = action === "like" ? true : false
                      const diff = liked ? 1 : -1
                      const newPost = { ...post, meta: { ...post.meta, liked, likes_count: likes_count+(diff) } };
                      const newPosts = posts.filter(p => p.id !== post.id).concat([ newPost ])
                      setPosts(newPosts)
                    }}/>
                    <p className="w-1/2 right-0 text-blue-400 font-normal text-sm flex items-center justify-center">
                      <img src="http://localhost:3001/dist/static/icons8-comments-80.png" />
                      <span className="mx-2">{post.meta.comments_count} comments</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </>
    )
}

PostsCard.craft = {
    displayName: "Posts Card",
    props: {
        title: "Posts",
    },
    related: {
      toolbar: PostsCardSettings
    }
}
