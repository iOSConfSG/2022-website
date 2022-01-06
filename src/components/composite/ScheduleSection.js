import React, { useState } from "react"

import { Tabs, ScheduleTable } from "~components"
import { DateTime } from 'luxon'

import { ScheduleData } from "~data"

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const SG_TIMEZONE = 'Asia/Singapore'

function formatDate (stringDate, timezone) {
  if (timezone) {
    const rezoned = DateTime.fromISO(stringDate, { zone: timezone })
    return rezoned.toLocaleString(DateTime.TIME_SIMPLE)
  } else {
    const dt = DateTime.fromISO(stringDate, { zone: localTimezone })
    return dt.toLocaleString(DateTime.TIME_SIMPLE)
  }
}
const Schedule17 = ScheduleData.filter(event => event.activity === "iosconfsg22.workshop1")
const Schedule18 = ScheduleData.filter(event => event.activity === "iosconfsg22.workshop2")
const Conference20 = ScheduleData.filter(event => event.activity === "iosconfsg22.day1")
const Conference21 = ScheduleData.filter(event => event.activity === "iosconfsg22.day2")
const sgSchedule17 = rezoneSchedule(Schedule17, SG_TIMEZONE)
const sgSchedule18 = rezoneSchedule(Schedule18, SG_TIMEZONE)
const sgSchedule20 = rezoneSchedule(Conference20, SG_TIMEZONE)
const sgSchedule21 = rezoneSchedule(Conference21, SG_TIMEZONE)

const schedule = {
  sg: {
    iosconfsg22: {
      day1: sgSchedule20,
      day2: sgSchedule21,
      workshop1: sgSchedule17,
      workshop2: sgSchedule18
    },
  },
}

function rezoneSchedule (schedule, timezone) {
  const rezoned = schedule.map(item => {
    return {
      ...item,
      start_at: formatDate(item.start_at, timezone),
      end_at: formatDate(item.end_at, timezone)
    }
  })
  return rezoned
}

function selectScheduleForTab (currentTab, timezone) {
  const location = timezone === SG_TIMEZONE ? 'sg' : 'others'
  return schedule[location].iosconfsg22[currentTab]
}

function ScheduleSection (props) {
  const [currentTab, setCurrentTab] = useState('workshop1')

  const [currentTimezone, setCurrentTimezone] = useState(localTimezone)
  const localSchedule = selectScheduleForTab(currentTab, currentTimezone)

  const selectedTab = (tab) => {
    setCurrentTab(tab)
    setCurrentTimezone(SG_TIMEZONE)
  }

  return (
    <>
      <Tabs defaultSelected={'workshop1'} currentTab={selectedTab}>
        <Tabs.Tab labelKey='workshop1'>17 January</Tabs.Tab>
        <Tabs.Tab labelKey='workshop2'>18 January</Tabs.Tab>
        <Tabs.Tab labelKey='day1'>20 January</Tabs.Tab>
        <Tabs.Tab labelKey='day2'>21 January</Tabs.Tab>
      </Tabs>
      <p className="text-sm mx-4 sm:mx-0">
        Times below are shown in <strong>Singapore Timezone.</strong> <br/>
        Use <strong><a href="https://www.timeanddate.com/worldclock/converter.html" target="blank">Timezone Converter</a></strong> to convert to your local time. 
        <br/><br/>
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ScheduleTable schedule={localSchedule} tab={currentTab} {...props} />
      </div>
    </>
  )

}

export default ScheduleSection
