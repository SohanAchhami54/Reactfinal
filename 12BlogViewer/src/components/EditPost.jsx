import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const EditPost = () => {
  const { id } = useParams()
  const { blog, updateBlog, setIslogin ,logout} = useAuth()
  const navigate = useNavigate()

  const [source, setSource] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const data = blog.find(b => b.id === Number(id))
    if (data) {
      setSource(data.source)
      setDescription(data.description)
    }
  }, [id])

  const handleSave = () => {
    updateBlog(id, { source, description })  // actually updates context
    navigate(`/blog/${id}`)
  }

  return (
    <div className="max-w-2xl mx-auto mt-5 p-6 rounded-md space-y-4">
      <h2 className="text-2xl font-bold">Editing post {id}</h2>

      <div className="flex flex-col space-y-2">
        <label className="font-medium">Source</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex gap-3">
        <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-md">Save</button>
        <button onClick={() => navigate(`/blog/${id}`)} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
        <button onClick={()=>navigate(-1)} className="px-4 py-2 bg-blue-600 rounded-md text-white" >Go Back</button>
      </div>
    </div>
  )
}

export default EditPost