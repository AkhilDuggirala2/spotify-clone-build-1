/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../globalStyles";
import { GridContainer, SectionContainer } from "./appStyles";
// components
import Sidebar from "../../components/Sidebar/Sidebar";
import Playlist from "../Playlists/Playlist";
import Navbar from "../../components/Navbar/Navbar";
import Login from "../Auth/Login";
import Search from "../Search/Search";
import ArtistSongs from "../Search/ArtistSongs";
import ArtistAlbums from "../Search/ArtistAlbums";
import RelatedArtists from "../Search/RelatedArtists";
import Download from "../Download/Download";
import Album from "../Album/Album";
import Artist from "../Artist/Artist";
import ModalsContextContainer from "../../components/ModalsContext/ModalsContextContainer";
import Dashboard from "../DashBoard/Dashboard";
import User from "../User/User";
import LibraryPlaylists from "../Library/LibraryPlaylists";
import Track from "../Track/Track";
import Albums from "../Library/Albums";
import Artists from "../Library/Artists";

function AppRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <ModalsContextContainer>
      <GridContainer>
        <Sidebar />
        <SectionContainer
          onScroll={(e) => {
            let opacity = (300 - (300 - e.target.scrollTop)) / 300;
            opacity = opacity > 1 ? 1 : opacity;

            document.documentElement.style.setProperty("--opacity", opacity);
            document.documentElement.style.setProperty(
              "--scroll-top",
              e.target.scrollTop
            );
          }}
        >
          <Navbar />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/app" component={Dashboard} exact />
            <Route path="/app/user/:name" component={User} exact />
            <Route path="/app/search" component={Search} exact />
            <Route path="/app/artist/:id" component={Artist} exact />
            <Route path="/app/album/:id" component={Album} exact />
            <Route
              path="/app/search/:name/albums"
              component={ArtistAlbums}
              exact
            />
            <Route
              path="/app/search/:name/tracks"
              component={ArtistSongs}
              exact
            />
            <Route
              path="/app/search/:name/artists"
              component={RelatedArtists}
              exact
            />
            <Route path="/app/playlist/:id" component={Playlist} exact />
            <Route
              path="/app/collection/playlists"
              component={LibraryPlaylists}
              exact
            />
            <Route path="/app/collection/albums" component={Albums} exact />
            <Route path="/app/collection/artists" component={Artists} exact />
            <Route path="/app/collection/track" component={Playlist} exact />
            <Route path="/app/download" component={Download} exact />
            <Route
              path="*"
              component={() => <h1 style={{ color: "red" }}>not found</h1>}
              exact
            />
          </Switch>
        </SectionContainer>
        <Track />
      </GridContainer>
    </ModalsContextContainer>
  </BrowserRouter>
);
