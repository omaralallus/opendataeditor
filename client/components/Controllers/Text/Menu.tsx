import * as React from 'react'
import * as store from '@client/store'
import * as menu from '../../Parts/Bars/Menu'

export default function Menu() {
  const report = store.useStore((state) => state.report)
  const language = store.useStore(store.getTextLanguage)
  const panel = store.useStore((state) => state.panel)
  const minimalVersion = store.useStore((state) => state.text?.minimalVersion)
  const currentVersion = store.useStore((state) => state.text?.currentVersion)
  const maximalVersion = store.useStore((state) => state.text?.maximalVersion)
  if (!minimalVersion || !currentVersion || !maximalVersion) return null

  return (
    <menu.MenuBar>
      <menu.MetadataButton
        active={panel === 'metadata'}
        onClick={() => store.togglePanel('metadata')}
      />
      <menu.ReportButton
        disabled={!report || report?.valid}
        active={panel === 'report'}
        onClick={() => store.togglePanel('report')}
      />
      <menu.SourceButton enabled />
      <menu.ChatButton disabled />
      <menu.UndoButton
        onClick={store.undoText}
        disabled={currentVersion <= minimalVersion}
      />
      <menu.RedoButton
        onClick={store.redoText}
        disabled={currentVersion >= maximalVersion}
      />
      <menu.ClearButton onClick={store.clearText} />
      {language === 'json' && (
        <React.Fragment>
          <menu.FixButton onClick={store.fixJson} />
          <menu.MinifyButton onClick={store.minifyJson} />
          <menu.PrettifyButton onClick={store.prettifyJson} />
        </React.Fragment>
      )}
    </menu.MenuBar>
  )
}
