import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import bloggrs, { authentication } from "lib/bloggrs-sdk";
import { CategoriesCardSettings } from "./CategoriesCardSettings";
import { useState } from "react";
// import { Text } from ""

type CategoriesCardProps = {
    categories_count?: any;
    title?: any;
    display_posts_count?: any;
}

export const CategoriesCard: UserComponent<CategoriesCardProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    const [ categories, setCategories ] = useState([])

    const { text, textComponent, color, ...otherProps } = props;

    const { title, categories_count } = props;
    
    const display_posts_count = props.display_posts_count === "true"
    useEffect(async () => {
      await authentication;
      const data = await bloggrs.categories.getCategories();
      setCategories(data)
    }, [])
    let categories_li = categories.map(category => 
      <li>{category.name} {display_posts_count ? `(${category.meta.posts_count})` : null}</li>  
    )
    // let categories = [
    //     <li>Food {display_posts_count ? '(5)' : null}</li>,
    //     <li>Fashion {display_posts_count ? '(252)' : null}</li>,
    //     <li>T-Shirts {display_posts_count ? '(159)' : null}</li>,
    //     <li>New Trends {display_posts_count ? '(9)' : null}</li>,
    //     <li>Woman's Fashion {display_posts_count ? '(45)' : null}</li>
    // ]
    // if (categories_count) categories = categories.slice(0,categories_count);

    return (
      <div ref={connect} className="col-span-2 h-1/2 mb-14 bg-white shadow-md w-full h-full rounded-md justify-center">
        <div className=" mx-6">
          <h1 className="py-3 mb-4 text-slate-700 font-medium text-xl">
            {title}
          </h1>
          <ul className="py-4 mx-5 list-disc space-y-3">
            {categories_li}
          </ul>
        </div>
      </div>
    )
}

CategoriesCard.craft = {
    displayName: "Categories Card",
    props: {
        title: "Categories",
        categories_count: 4,
        display_posts_count: true,
    },
    related: {
        toolbar: CategoriesCardSettings
    }
}
