import axios from "axios"
import { useState, type ChangeEvent, type FormEvent } from "react"

type FileStatus = 'idle' | 'uploading' | 'success' | 'error'

const FileUpload = () => {
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<FileStatus>('idle')

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null)
        setStatus('idle')
    }

    const handleFileUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        const form = e.currentTarget          

        setStatus('uploading')

        const formData = new FormData()
        formData.append('file', file)

        try {
            await axios.post(
                'https://api.escuelajs.co/api/v1/files/upload',
                formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
            })

            setStatus('success')
            setFile(null)
            form.reset() 
             
            setTimeout(()=>{
                setStatus('idle')
            },2500)

        } catch (error) {
            console.error("Upload error:", error)
            setStatus('error')
        }
    }

    return (
        <div>
            <h1 className="font-semibold text-2xl">File Upload</h1>

            <form onSubmit={handleFileUpload} className="flex flex-col gap-2">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="bg-blue-700 rounded-md p-2"
                />

                {file && status !== 'success' && (
                    <div>
                        <p>File name: {file.name}</p>
                        <p>File size: {file.size}</p>
                        <p>File Type: {file.type}</p>
                    </div>
                )}

                {file && status !== 'uploading' && (
                    <button type="submit" className="bg-gray-600 p-2 rounded-md">
                        Upload
                    </button>
                )}

                {status === 'uploading' && (
                    <p className="text-yellow-500">Uploading...</p>
                )}

                {status === 'success' && (
                    <p className="text-green-500">File uploaded successfully!</p>
                )}

                {status === 'error' && (
                    <p className="text-red-500">Upload failed. Please try again.</p>
                )}
            </form>
        </div>
    )
}

export default FileUpload