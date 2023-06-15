import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import React from 'react'

export const LessonTimeLine = () => {
  return (
    <Timeline>

        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Yemek Ye</TimelineContent>
        </TimelineItem>


        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Kod Yaz</TimelineContent>
        </TimelineItem>


        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>

            </TimelineSeparator>
            <TimelineContent>Git uyu</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}
