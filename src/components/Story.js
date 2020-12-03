import React, {useEffect} from 'react'
import StoryBanner from './StoryBanner'
import {useSelector, useDispatch} from 'react-redux'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Review from './Review'
import { Container, Grid } from '@material-ui/core';

export default function Story() {
    const dispatch = useDispatch()
    const currentStory = useSelector(state => state.story)
    const loggedInUser = useSelector(state => state.currentUser)
    const favsColl = useSelector(state => state.favs)

  useEffect(()=> {
    fetch(`http://localhost:3000/stories/${currentStory.id}`)
    .then(res => res.json())
    .then(favs => {
      console.log(favs)
      dispatch({
        type: "SET_FAVORITES",
        favs: favs.favorites
      }) 
    })
  }, [])
  
  const deleteFavorite = () => {
    fetch(`http://localhost:3000/stories/${currentStory.id}/favorite`, {
      method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
              story_id: currentStory.id, 
              user_id: loggedInUser.id,
            })
    })
    .then(res => res.json())
    .then(favs => {
      console.log(favs)
      dispatch({
        type: 'SET_FAVORITES',
        favs: favs
      })
    }) 
  }

  const postFavorite = () => {
    fetch(`http://localhost:3000/stories/${currentStory.id}/favorite`, {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          user_id: loggedInUser.id,
          story_id: currentStory.id
        })
      })
      .then(res => res.json())
      .then(favs => { 
        console.log(favs)
        dispatch({
          type: "SET_FAVORITES",
          favs: favs
        }) 
      })
  
  }

  function FavContainer() {
    if(favsColl.length) {
      return favsColl.map(fav => {
        if(fav.user_id !== loggedInUser.id){
          return ( 
            <IconButton color="secondary" onClick={postFavorite}>
              <FavoriteBorderIcon />
            </IconButton>
          )
        } else {
            return (
                <IconButton color="secondary" onClick={deleteFavorite}>
                  <FavoriteIcon />
                </IconButton>
            )
        }
      })
    } else {
      return ( 
        <IconButton color="secondary" onClick={postFavorite}>
          <FavoriteBorderIcon>1</FavoriteBorderIcon>
        </IconButton>
      )
    }
  }
    return (
        <div>
            <StoryBanner />
            <Grid container style={{paddingLeft: '1000px'}}>
                <FavContainer />
            </Grid>
            <Container>
                <p>{currentStory.body}</p>
            </Container>
            <hr />
            <br />
            <Review />
        </div>
    )
}
