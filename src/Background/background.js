import "./background.css";
import Skeleton from "../Components/Skeleton";
function Background() {
  return (
    <>
      <div class="area">
        <ul class="square">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Skeleton></Skeleton>
      </div>
    </>
  );
}
export default Background;
