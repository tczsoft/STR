import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import apiurl from '../../Services/apiendpoint/apiendpoint';


export default function GalleryModel(props) {

  const {setVisible,Visible, ModelData} = props;
  const GalleryData = ModelData.Images.map(item=>{
    if(item.split(".").reverse()[0] != "mp4"){
      return { src: `${apiurl()}/${item}`, width: 3840, height: 5760 }
    }
    else{
      return {type: "video", width: 1280, height: 720, poster:'https://www.liarafashions.com/assets/images/Liara.png', sources: [{src: `${apiurl()}/${item}`,type:'video/mp4'}] }
    }
    
  })
  return (
    <>
      {GalleryData && <Lightbox open={Visible} close={() => setVisible(false)} slides={GalleryData} plugins={[Video,Thumbnails,Zoom,Counter]} video={{autoPlay:true }} />}
      {/* {VideoData && <Lightbox open={Visible} close={() => setVisible(false)} slides={VideoData} plugins={[Counter]} />} */}
    </>
    
  )
}
