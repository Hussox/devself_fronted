import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { HomePopular } from './HomePopular';
import { HomeNew } from './HomeNew';
import Grid from '@mui/material/Grid';

export const Home = () => { 
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  /*<Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые"/>
        <Tab label="Популярные" />
      </Tabs>*/ // ТАК БЫЛО РАНЬШЕ
  return (
    <>
    
      
        <Tabs value={tabIndex} style={{ marginBottom: 15 }} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>
      
    
    <Box>
      <Box>
        {tabIndex === 0 && (
          <Box>
            <HomeNew/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <HomePopular/>
          </Box>
        )}
      </Box>
    </Box>
    </>
  );
}

export default Home;