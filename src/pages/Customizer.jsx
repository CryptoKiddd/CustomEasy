import {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {download} from '../assets'

import config from '../config/config'
import { EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import {downloadCanvasToImage,reader} from '../config/helpers'
import { fadeAnimation,slideAnimation } from '../config/motion'

import { AiPicker,ColorPicker,CustomButton,FilePicker,Tab } from '../components'

import state from '../store'
const Customizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {
        !snap.intro && (
          <>
           <motion.div
           key='custom'
           className='absolute top-0 left-0 z-10'
           {...slideAnimation('left')}
           >
            <div className="flex items-center min-h-screen">
              <div className="editor-tabs-container tabs">
                 {EditorTabs.map(tab=>{
                  return(
                    <Tab
                    key={tab.name}
                    tab={tab}

                    handleClick={()=>{}}
                     />
                  )
                 })}
              </div>
            </div>

           </motion.div>
           <motion.div {...fadeAnimation} className='absolute z-10 top-5 right-5'>
                  <CustomButton type='filled' title='Go Back' handleClick={()=>state.intro=true} customStyles='w-fit px-4 py-2.5 font-bold text-sm' />
           </motion.div>
           <motion.div className='filtertabs-container' {...slideAnimation('up')}>
           {FilterTabs.map(tab=>{
                  return(
                    <Tab
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab=''
                    handleClick={()=>{}}
                     />
                  )
                 })}
           </motion.div>
          </>
        )
      }

    </AnimatePresence>
  )
}

export default Customizer