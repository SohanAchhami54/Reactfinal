  import Skeleton from '@mui/material/Skeleton'
  const SkeletonCard = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-83">
      <div className="flex flex-col gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-700 via-25% to-gray-800 ">

        {/* Date row */}
        <div className="flex items-center gap-2">
          <Skeleton
            variant="circular"
            width={48}
            height={48}
            animation="wave"
          />

          <Skeleton
            variant="rounded"
            width={180}
            height={20}
            animation="wave"
          />
        </div>

        {/* Temperature */}
        <Skeleton variant="rounded" width={160} height={20} />

        {/* Temperature Max */}
        <Skeleton variant="rounded" width={220} height={20} />

        {/* Temperature Min */}
        <Skeleton variant="rounded" width={214} height={20} />

        {/* Pressure */}
        <Skeleton variant="rounded" width="100%" height={28} />

        {/* Pressure */}
        <Skeleton variant="rounded" width="100%" height={28} />

        {/* Humidity + Weather */}
        <div className="flex gap-3">
          <Skeleton variant="rounded" width={100} height={28} />
          <Skeleton variant="rounded" width={120} height={28} />
        </div>

        {/* Description */}
        <Skeleton variant="rounded" width="100%" height={28} />

        {/* Clouds */}
        <Skeleton variant="rounded" width="100%" height={28} />

        {/* Wind Degree + Gust */}
        <div className="flex gap-3">
          <Skeleton variant="rounded" width={120} height={20} />
          <Skeleton variant="rounded" width={120} height={20} />
        </div>

        {/* Wind Speed */}
        <Skeleton variant="rounded" width={150} height={20} />
      </div>
    </div>
  );
};

export default SkeletonCard