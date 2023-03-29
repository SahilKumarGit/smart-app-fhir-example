import loadingSvg from "./../loading.svg"

export function LoadingComponent({ loading }) {

  if (loading) {
    return <div className="LoadingComponent">
      <img src={loadingSvg} alt="" />
      <div className="txt">It take some time..., Hold On!</div>
    </div>;
  }
  return <></>
}
