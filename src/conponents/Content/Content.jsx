import React from 'react'
import styles from './Content.module.css';
import Product from './Product/Product';
import Detail from './Detail/Detail';
const products = [
    {
        img:'https://clubgaixinh.com/wp-content/uploads/2021/03/gai-xinh-viet-nam-2-683x1024.jpg',
        name : 'Lê Thu Hương',
        priceSale : 500
    },
    {
        img:'https://clubgaixinh.com/wp-content/uploads/2021/03/gai-xinh-viet-nam-2-683x1024.jpg',
        name : 'Lê Thu Hương',
        priceSale : 500
    } ,{
        img:'https://clubgaixinh.com/wp-content/uploads/2021/03/gai-xinh-viet-nam-2-683x1024.jpg',
        name : 'Lê Thu Hương',
        priceSale : 500
    }, {
        img:'https://clubgaixinh.com/wp-content/uploads/2021/03/gai-xinh-viet-nam-2-683x1024.jpg',
        name : 'Lê Thu Hương',
        priceSale : 500
    }
];
const detail =[

  {
    is_reverse : true,
    img:'https://duhocminhkhang.com/wp-content/uploads/2020/01/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-%C4%91eo-m%E1%BA%AFt-k%C3%ADnh-c%E1%BB%B1c-cute-10-1.jpg',
    title:'Sách Đẹp',
    content:'Gái xinh mặc đồ thiếu vải hay những bộ bikini 2 mảnh luôn khiến cánh đàn ông phải xuýt xoa. Vẻ đẹp sexy, nóng bỏng và khỏe khoắn cùng bộ trang phục hở táo bạo. Hãy cùng Playnhe.com chiêm ngưỡng sắc đẹp của gái xinh trên từng đất nước ngay bên dưới bài viết này nhé.'
  },
  {
    is_reverse : false,
    img:'https://duhocminhkhang.com/wp-content/uploads/2020/01/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-%C4%91eo-m%E1%BA%AFt-k%C3%ADnh-c%E1%BB%B1c-cute-10-1.jpg',
    title:'Sách Đẹp',
    content:'Gái xinh mặc đồ thiếu vải hay những bộ bikini 2 mảnh luôn khiến cánh đàn ông phải xuýt xoa. Vẻ đẹp sexy, nóng bỏng và khỏe khoắn cùng bộ trang phục hở táo bạo. Hãy cùng Playnhe.com chiêm ngưỡng sắc đẹp của gái xinh trên từng đất nước ngay bên dưới bài viết này nhé.'
  }
];
function Content() {
  return (
    <div className={styles.container}>
        {
          products.map((cal,index)=>{
            return <Product
            key={index}
            img={cal.img}
            name = {cal.name}
            priceSale = {cal.priceSale}
            />
          })
        }
        {
          detail.map((detail,index)=>{

            return (
              <Detail
              key={index}
              is_reverse = {detail.is_reverse}
              img={detail.img}
              title={detail.title}
              content={detail.content}
              />
            )
          })
        }
    </div>
  )
}

export default Content