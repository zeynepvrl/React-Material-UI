import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';

export const LessonList = () => {
  return (
    <Box>
        <List>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AirplanemodeActiveIcon/>
                    </ListItemIcon>
                    <ListItemText primary="deneme" />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <AssistWalkerIcon/>
                    </ListItemIcon>
                    <ListItemText primary="deneme2"/>
                </ListItemButton>
            </ListItem>

            <Divider/>

            <ListItem>
                <ListItemText primary="deneme3"/>
            </ListItem>

        </List>
    </Box>
  )
}
