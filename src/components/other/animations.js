import { easeIn, motion, transform } from "framer-motion"

export const buttonAnims = {
    hidden: {opacity: 0},
    visible: {opacity: 1, y: 0},
    transition: {duration: 0.6, ease: 'easeOut'},
    tap: {scale: 0.9, transition: {duration: 0.1}},
    hover: {scale: 1.1, transition: {duration: 0.1} }
}


export const letterAnimation = {
  hidden: {opacity : 0},
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.02
    }
  })
}


export const navbarAnimation = {
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, y: 0}
}

export const aboutcontainervar = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.4}},
}

export const aboutitemvar = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'backInOut'}},    
}

export const coinlistvar = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.05, delayChildren: 0.2}}
}

export const carditemvar = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}, ease: 'easeOut'}
}