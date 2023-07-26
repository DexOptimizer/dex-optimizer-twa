interface ITradingViewProps {
  pool: string
}

const Graph: React.FC<ITradingViewProps> = ({ pool }) => {
  return (
    <>
      <iframe
        src={`https://chartingview.redoubt.online/?symbol=${pool}&chart_only=true&interval=720`}
        allow=" fullscreen; picture-in-picture" width="100%" height='250px' />
    </>
  )
}
export default Graph