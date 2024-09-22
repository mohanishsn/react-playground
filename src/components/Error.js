
import { useRouteError } from "react-router-dom"
const Error = () => {
  const err = useRouteError();
  console.log('err==>', err);
  return (
    <div>
      <h4>Oops! Something went wrong</h4>
      <p>{err.data}</p>
    </div>
  )
}

export default Error