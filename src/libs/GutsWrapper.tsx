import React, { CSSProperties, FC } from 'react'
import { connect } from 'react-redux'

type GutsWrapperProps = {
  action: string
  children: any
  style?: CSSProperties
  loadingList: { id: string; action: string }[]
  container?: JSX.Element
}

const LoadingFallback: FC<{ style: CSSProperties }> = ({ style = {} }) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <h2 style={{ color: 'black' }}>LOADING...</h2>
    </div>
  )
}

const getSubcontainerStyle = (style: CSSProperties) => ({
  ...style,
  position: 'relative',
  margin: 0,
})
const getContainerStyle = (style: CSSProperties) => ({
  ...style,
  padding: 0,
  display: 'block',
})

class GutsWrapperClass extends React.Component<GutsWrapperProps> {
  constructor(props: GutsWrapperProps) {
    super(props)
    this.state = {
      hasRenderError: false,
    }
  }

  componentDidCatch() {
    this.setState({ hasRenderError: true })
  }

  render() {
    const { children, style, container, loadingList, action } = this.props

    const GutsContainer = container ?? <div />

    const isLoading =
      loadingList.findIndex((el) => el.action.includes(action)) !== -1
    //const { hasRenderError } = this.state

    const gutsContainerStyle = {
      ...GutsContainer.props.style,
      ...style,
    }

    let fallback = null
    if (isLoading) {
      gutsContainerStyle.overflow = 'hidden'
      gutsContainerStyle.overflowY = 'hidden'
      gutsContainerStyle.overflowX = 'hidden'
      fallback = (
        <LoadingFallback
          style={{ borderRadius: gutsContainerStyle.borderRadius }}
        />
      )
    }

    return React.cloneElement(GutsContainer, {
      children: React.cloneElement(
        GutsContainer,
        {
          style: getSubcontainerStyle(gutsContainerStyle),
        },
        [children, fallback],
      ),
      style: getContainerStyle(gutsContainerStyle),
    })
  }
}

export default connect((state: any) => ({
  loadingList: state.gutsLoading.loadingList,
}))(GutsWrapperClass)
