import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const User = () => {
  const { id } = useParams()
  const user = useSelector((state) => state.users.find((u) => u.id === id))

  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>
      {user.blogs.length > 0 ? (
        <div>
          <p>
            <strong>Blogs:</strong>
          </p>
          <ul>
            {user.blogs.map((blog) => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have no blogs!</p>
      )}
    </div>
  )
}

export default User