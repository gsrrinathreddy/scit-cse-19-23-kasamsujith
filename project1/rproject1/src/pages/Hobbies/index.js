// export default function Hobbies(){
//     return(
//         <>
//        <h3>My Hobbies are reding non friction books, gardening and watching football</h3>
//         </>
//     )
// }
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4l5MbM7Pmp6qbh_BKq5o8hc4woRXvNfDLt8xW-FI8g&usqp=CAU&ec=48665701',
    title: 'Reading Books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg',
    title: 'Watching Football',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSstH5ZMy1aIZBhhi4ktaBDKLEs1vE4j6qn8F8jJomA&usqp=CAU&ec=48665701',
    title: 'Gardening',
    
  },
  {
    img:'https://www.thedailymeal.com/img/gallery/basic-cooking-methods-you-need-to-know/Basic-Cooking-Methods.jpg',
    title: 'Cooking',
    
    cols: 2,
  },
  
];