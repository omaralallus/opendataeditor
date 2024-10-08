import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import ScrollBox from '../../Parts/Boxes/Scroll'
import Action from './Action'
import Menu from './Menu'
import Panel from './Panel'
import View from './View'
import * as store from '@client/store'

export default function File() {
  const theme = useTheme()
  const panel = store.useStore((state) => state.panel)

  const height = `calc(100vh - ${theme.spacing(8)})`
  const panelHeight = panel ? 42 : 0
  const contentHeight = `calc(100vh - ${theme.spacing(8 + 8 + 8 + panelHeight)})`

  return (
    <Box sx={{ height }}>
      <Menu />
      <ScrollBox height={contentHeight}>
        <View />
      </ScrollBox>
      <Panel />
      <Action />
    </Box>
  )
}
