import {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import {download} from '../assets'
import { EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import {downloadCanvasToImage,reader} from '../config/helpers'
const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer