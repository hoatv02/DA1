import React from 'react'
import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.Header}>
        <ul className={styles.title_ul}>
            <li className={styles.title_li}>Trang Chủ</li>
            <li className={styles.title_li}>Giới Thiệu</li>
            <li className={styles.title_li}>Sản Phẩm</li>
            <li className={styles.title_li}>Góp Ý</li>
        </ul>

    </div>
  )
}

export default Header