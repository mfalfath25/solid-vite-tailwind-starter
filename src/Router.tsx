import { Routes, Route } from "@solidjs/router";
import Home from "@pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  )
}

export default Router