import './TabItems.css'

const TabItems = props => {
  const {list, tabIdChange, activeState} = props
  const send = () => {
    tabIdChange(list.tabId)
  }
  const name = activeState ? 'buttonActive' : 'button'
  return (
    <li>
      <button type="button" className={name} onClick={send}>
        {list.displayText}
      </button>
    </li>
  )
}

export default TabItems
