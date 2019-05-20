import React from "react";

import { Slideshow } from "../components/Slideshow";

const TOP_ROOM_LIST = [
    { title: "Room 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", preview: "https://store-images.s-microsoft.com/image/apps.608.13510798885735219.cf55aeca-e690-41e0-a88b-41b0e517a3be.c94e1bfa-1b68-4cf5-9954-f967168480b4?mode=scale&q=90&h=1080&w=1920" },
    { title: "Room 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", preview: "https://www.minecraft.net/content/dam/archive/og-image/minecraft-hero-og.jpg" },
    { title: "Room 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", preview: "https://i.ytimg.com/vi/hcutClmY1pI/maxresdefault.jpg" }
]

export class Home extends React.Component {

    render() {
        return (
            <div>
                <Slideshow rooms={TOP_ROOM_LIST}/>
            </div>
        );
    }
}