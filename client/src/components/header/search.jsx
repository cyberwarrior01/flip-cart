import { InputBase, styled, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Inputbase = styled(InputBase)`
  width: 165%;
  height: 40px;
  margin-left : 40px;
  margin-right : auto;
  background: #f0f5ff;
  font-family: 'inter_regular, fallback-inter_regular, Arial, sans-serif';
  font-size: 20px;
  text-align: start;
  box-shadow: none;
  border-radius: 8px;
  border: none;
  padding: 0 16px;
`;

const Searchbar = () => {
  return (
    <>
      <Inputbase
        placeholder="Search for Products, Brands and More"
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="search" edge="start">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default Searchbar;
