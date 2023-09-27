import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';

export default function ColorInversionFooter() {
  return (
    <Sheet
      variant="solid"
      invertedColors
    >
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
        </List>
      </Box>
    </Sheet>
  );
}
