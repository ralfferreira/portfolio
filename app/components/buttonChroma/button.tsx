'use client'

import styles from './button.module.css'

type Props = {
  children: React.ReactNode
}

const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = targetId ? document.querySelector(targetId) : null;
  if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ButtonChroma({ children, ...props }: Props) {
  return (
    <a href='#contact' onClick={handleLinkClick}>
      <button className={styles.button} {...props}>
       <span>{children}</span>
      </button>
    </a>
  )
}
