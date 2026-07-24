import Skeleton from "@mui/material/Skeleton";
const BlogSkeleton = () => {
  return (
   <div className="flex flex-col rounded-md bg-gray-500 p-2">
  {/* Image */}
  <Skeleton
    variant="rectangular"
    className="rounded-md"
    height={160}
    width="100%"
  />

  {/* Created At */}
  <Skeleton variant="text" width="60%" height={20} />

  {/* ID */}
  <Skeleton variant="text" width="30%" height={20} />

  {/* Description */}

  <Skeleton variant="text" width="70%" height={18} />
  <Skeleton variant="text" width="70%" height={18} />
  <Skeleton variant="text" width="100%" height={65} />
</div>
  )
}

export default BlogSkeleton
