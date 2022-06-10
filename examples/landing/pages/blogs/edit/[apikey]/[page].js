import { Editor, Frame, Element } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

import { Viewport, RenderNode } from '../../../../components/editor';
import { Container, Text } from '../../../../components/selectors';
import { Button } from '../../../../components/selectors/Button';
import { Custom1, OnlyButtons } from '../../../../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../../../../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../../../../components/selectors/Custom3';
import { Video } from '../../../../components/selectors/Video';
import { CategoriesCard } from "../../../../components/selectors/CategoriesCard";
import { PostsCard } from "../../../../components/selectors/PostsCard";
import { BContainer } from "../../../../components/selectors/BContainer";
import { BRow } from "../../../../components/selectors/BRow";
import { BCol } from "../../../../components/selectors/BCol";
import { BHeader } from "../../../../components/selectors/BHeader";
import { Div } from "../../../../components/selectors/Div";
import { Home } from "../../../../components/selectors/Home";
import { SinglePost } from "../../../../components/selectors/SinglePost";
import { useRouter } from 'next/router'
import BloggrsClient from "bloggrs-api-client";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  const router = useRouter();
  const { apikey, page } = router.query;
  
  if (!apikey) return null
  const bloggrsClient = new BloggrsClient(apikey)
  const [ state, setState ] = useState(null);
  
  useEffect(async () => {
    const { blog, key } = await bloggrsClient.blogs.getByApiKey(apikey);
    let { craftjs_json_state } = blog;
    console.log({ blog, page })
    if (page !== "index") craftjs_json_state = blog.pages.find(
      p => p.id == page
    ).craftjs_json_state
    // console.log(craftjs_json_state,'craftjs_json_state')
    if (!craftjs_json_state) craftjs_json_state = "{}"
    setState(craftjs_json_state);
  }, [state])

  if (!state) return <>Loading....</>
  return (
    <ThemeProvider theme={theme}>
      <BHeader/>
        <style dangerouslySetInnerHTML={{__html: "undefined" || `
        `}} />
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: 'craft.js.org',
            cardType: 'summary_large_image',
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
            CategoriesCard,
            PostsCard,
            BContainer,
            BRow,
            BCol,
            BHeader,
            Div,
            Home,
            SinglePost
          }}
          // enabled={true}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame json={state === "{}" ? undefined : state}>
              <Element
                id="root_container"
                canvas
                is={Container}
                width="100%"
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={['40', '40', '40', '40']}
                custom={{ displayName: 'App' }}
              >
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;