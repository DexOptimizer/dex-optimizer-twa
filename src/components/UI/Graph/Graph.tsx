interface ITradingViewProps {
  pool: string
}

const Graph: React.FC<ITradingViewProps> = ({ pool }) => {
  return (
    <>
      <iframe
        src={`https://chartingview.redoubt.online/?symbol=${pool}`}
        allow=" fullscreen; picture-in-picture" width="90%" height='250px' />
    </>
  )
}
export default Graph