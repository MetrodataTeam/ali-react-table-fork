import React, { ReactNode } from 'react'
import { Classes } from './styles'
import { LOADING_ICON_SIZE } from './utils'

const LoadingIndicatorIcon = ({ size, prefixCls }: { size: number; prefixCls?: string }) => (
  <svg
    className={Classes(prefixCls).loadingIndicatorIcon}
    style={{
      margin: 'auto',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="#23a7fa"
      strokeDasharray="188 64"
      strokeLinecap="round"
      strokeWidth="10"
    >
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)

Loading.defaultProps = {
  visible: true,
}

export default function Loading({
  visible,
  children,
  prefixCls,
  loadingIcon,
  headerHeight
}: {
  visible: boolean
  children: ReactNode
  prefixCls?: string
  loadingIcon?: React.ReactElement
  headerHeight?: number
}) {
  return (
    <div className={Classes(prefixCls).loadingWrapper} style={{ position: 'relative' }}>
      {visible && (
        <div
          className={Classes(prefixCls).loadingIndicatorWrapper}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <div
            className={Classes(prefixCls).loadingIndicator}
            style={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              marginTop: headerHeight || LOADING_ICON_SIZE ,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
           {loadingIcon || <LoadingIndicatorIcon size={LOADING_ICON_SIZE} prefixCls={prefixCls} />} 
          </div>
        </div>
      )}
      <div className={Classes(prefixCls).loadingContentWrapper}>
        {children}
      </div>
    </div>
  )
}
