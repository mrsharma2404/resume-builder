import React, { useState } from 'react'
import { useAppSelector } from '@helpers/hooks/redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import ResumeSectionItem from '@components/ResumeSectionItem'

// styles import
import styles from './index.module.scss'

// TODO: need to think of a suitable name for this section
const MainSection = () => {
  const resumeSectionNameList = useAppSelector((state) => state.commonReducer.resumeSectionNameList)

  return (
    <div className={styles.wrapper}>
      <Tabs selectedTabClassName={styles.selectedTab} className={styles.tabs}>
        <TabList className={styles.tablist}>
          {resumeSectionNameList.map((resumeSectionName, index) => {
            return (
              <Tab className={styles.tabItem} key={resumeSectionName.id}>
                {resumeSectionName.label} ({resumeSectionName.itemCount})
              </Tab>
            )
          })}
        </TabList>
        <div className={styles.divider}></div>

        <TabPanel className={styles.tabPanelWrapper}>
          <div className={styles.tabPanelContainer}>
            <BasicButton label="Add new" onClickFunction={() => {}} className={styles.addBtn} />
            <div className={styles.sectionItemList}>
              {[0, 1, 2, 3].map((item, index) => {
                return <ResumeSectionItem data={item} />
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  )
}

export default MainSection
