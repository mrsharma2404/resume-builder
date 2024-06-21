import React from 'react'
import { useAppSelector } from '@helpers/hooks/redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

// local component imports
import ListSection from '@components/ListSection'

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
        {resumeSectionNameList.map((resumeSectionName, index) => {
          return (
            <TabPanel className={styles.tabPanelWrapper} key={resumeSectionName.value}>
              <div className={styles.tabPanelContainer}>
                <ListSection resumeSectionName={resumeSectionName} />
              </div>
            </TabPanel>
          )
        })}
      </Tabs>
    </div>
  )
}

export default MainSection
