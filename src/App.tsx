import { Container, Grid, Card, CardMedia, CardContent, Typography, Link } from '@mui/material';

function App() {
  const coworkingSpaces = [
    {
      name: 'ワンサードライフ 秋葉原',
      image: '/public/pwa-192x192.png',
      link: 'https://www.1-3rdlife.com/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCliIb2VjG_DFhNDvapaGTuMuT5ywNFWCr1hGhcPIZ0ykwaeWXqDe7sxoCNHQQAvD_BwE'
    },
    {
      name: '渋谷は HAKADORU',
      image: '/public/pwa-192x192.png',
      link: 'https://haka-doru.jp/newopen/shibuya_miyamasuzaka/'
    },
    {
      name: '新宿は HAKADORU',
      image: '/public/pwa-192x192.png',
      link: 'https://haka-doru.jp/newopen/shinjuku/'
    }
  ];
  
  return (
    <Container>
      <Grid container spacing={4}>
        {coworkingSpaces.map((space, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={space.link} underline="none" target="_blank" rel="noopener">
              <Card>
                <CardMedia
                  component="img"
                  width="140"
                  height="300"
                  image={space.image}
                  alt={space.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {space.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;