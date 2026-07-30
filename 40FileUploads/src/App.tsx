import FileUpload from "./components/FileUpload"

import DnDPlacement from "./components/DnDPlacement"
import { SortableList } from "./components/SortableList"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 bg-gray-800 text-white p-2">
      <FileUpload/>
      <DnDPlacement/>
      <SortableList/>
    </div>
  )
}

export default App
