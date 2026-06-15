import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (

            <div className='flex flex-col gap-4 bg-gray-700 p-3 rounded-md group'>
                
                   <Skeleton variant="rounded" width={262} height={140} />
                   <Skeleton variant="rounded" width={230} height={30} />
                   <Skeleton variant="rounded" width={210} height={30} />
                   <div className='flex flex-col gap-1'>
                         <Skeleton variant="rounded" width={240} height={15} />
                         <Skeleton variant="rounded" width={225} height={15} />
                   </div>
                  <Skeleton variant="rounded" width={262} height={50} />
            </div>
  );
}
