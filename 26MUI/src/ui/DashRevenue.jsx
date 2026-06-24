import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { FaDollarSign } from "react-icons/fa6"
import { MdOutlineBorderColor } from "react-icons/md"
import { IoMdPeople } from "react-icons/io"

const cards = [
  {
    id: 1,
    title: 'Revenue Today',
    revenue:'$12840',
    description: '+5,50% from yesterday',
    icon:<FaDollarSign />
  },
  {
    id: 2,
    title: 'Orders Complete',
    revenue:'287', 
    description: '+6,20% from yesterday',
    icon:<MdOutlineBorderColor />
  },
  {
    id: 3,
    title: 'Returning Customer',
    revenue:'84',
    description: '+8,20% from yesterday',
    icon:<IoMdPeople />
  },
];

function DashRevenue() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }} className='flex flex-col gap-3'>
                  <div className='flex justify-between items-center'>
                     <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                     <Typography variant='h6'>
                        {card.icon}
                     </Typography>
                  </div>
             
               <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                {card.revenue}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default DashRevenue
