import React from 'react'
import classes from './Detail.module.css';
function Detail({img,title,content,is_reverse}) {
  return (
    <div className={classes.detail}
    
    style={ is_reverse === true ? {flexDirection: 'row-reverse'} : {} }
    >
        <div className={classes.img}>
            <img src={img} alt="" />
        </div>
        <div className={classes.content}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Detail