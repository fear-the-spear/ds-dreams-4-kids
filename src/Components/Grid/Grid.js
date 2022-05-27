import Grid from 'hedron';

const Grids = props => {
  return (
    <Grid.Provider
      padding="20px"
      breakpoints={{ sm: '-500', md: '501-750', lg: '+750' }}
    >
      <Grid.Bounds direction="vertical">
        <Grid.Box sm={{ hidden: true }}>
          <h1>This header hides on small screens</h1>
          {props.children}
        </Grid.Box>
        <Grid.Box>Content</Grid.Box>
        <Grid.Box lg={{ padding: '50px' }}>
          This footer gains extra padding on large screens
        </Grid.Box>
      </Grid.Bounds>
    </Grid.Provider>
  );
};

export default Grids;
