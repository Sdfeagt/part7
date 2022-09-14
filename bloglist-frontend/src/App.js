import Blogs from "./components/Blogs"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import NavBar from "./components/NavBar"
import Blog from "./components/Blog"
import User from "./components/User"
import Togglable from "./components/Toggable"
import AddBlogForm from "./components/AddBlogForm"
import userService from "./services/users"
import { login } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/userReducer"
import { initializeBlogs } from "./reducers/blogReducer"
import { useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "@mui/material"



const App = () => {
  const blogFormRef = useRef()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.login)

  useEffect(() => {
    const userFromStorage = userService.getUser()
    if (userFromStorage) {
      dispatch(login(userFromStorage))
    }
  }, [])

  useEffect(() => {
    dispatch(initializeUsers())
    dispatch(initializeBlogs())
  }, [])

  if (user === null) {
    return (
      <Container>
        <LoginForm />
      </Container>
    )
  }

  return (
    <Container>
      <NavBar />
      <Notification />
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <AddBlogForm togglableRef={blogFormRef} />
      </Togglable>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Container>
  )
}

export default App