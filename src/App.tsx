import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch} from './store/hooks'
import {getStationsThunk} from './store/slices/stations/thunks'
import {useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Search from './components/search/Search'
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', value: 1994 },
  { title: 'The Godfather', value: 1972 },
  { title: 'The Godfather: Part II', value: 1974 },
  { title: 'The Dark Knight', value: 2008 },
  { title: '12 Angry Men', value: 1957 },
  { title: "Schindler's List", value: 1993 },
  { title: 'Pulp Fiction', value: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    value: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', value: 1966 },
  { title: 'Fight Club', value: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    value: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    value: 1980,
  },
  { title: 'Forrest Gump', value: 1994 },
  { title: 'Inception', value: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    value: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", value: 1975 },
  { title: 'Goodfellas', value: 1990 },
  { title: 'The Matrix', value: 1999 },
  { title: 'Seven Samurai', value: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    value: 1977,
  },
  { title: 'City of God', value: 2002 },
  { title: 'Se7en', value: 1995 },
  { title: 'The Silence of the Lambs', value: 1991 },
  { title: "It's a Wonderful Life", value: 1946 },
  { title: 'Life Is Beautiful', value: 1997 },
  { title: 'The Usual Suspects', value: 1995 },
  { title: 'Léon: The Professional', value: 1994 },
  { title: 'Spirited Away', value: 2001 },
  { title: 'Saving Private Ryan', value: 1998 },
  { title: 'Once Upon a Time in the West', value: 1968 },
  { title: 'American History X', value: 1998 },
  { title: 'Interstellar', value: 2014 },
  { title: 'Casablanca', value: 1942 },
  { title: 'City Lights', value: 1931 },
  { title: 'Psycho', value: 1960 },
  { title: 'The Green Mile', value: 1999 },
  { title: 'The Intouchables', value: 2011 },
  { title: 'Modern Times', value: 1936 },
  { title: 'Raiders of the Lost Ark', value: 1981 },
  { title: 'Rear Window', value: 1954 },
  { title: 'The Pianist', value: 2002 },
  { title: 'The Departed', value: 2006 },
  { title: 'Terminator 2: Judgment Day', value: 1991 },
  { title: 'Back to the Future', value: 1985 },
  { title: 'Whiplash', value: 2014 },
  { title: 'Gladiator', value: 2000 },
  { title: 'Memento', value: 2000 },
  { title: 'The Prestige', value: 2006 },
  { title: 'The Lion King', value: 1994 },
  { title: 'Apocalypse Now', value: 1979 },
  { title: 'Alien', value: 1979 },
  { title: 'Sunset Boulevard', value: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    value: 1964,
  },
  { title: 'The Great Dictator', value: 1940 },
  { title: 'Cinema Paradiso', value: 1988 },
  { title: 'The Lives of Others', value: 2006 },
  { title: 'Grave of the Fireflies', value: 1988 },
  { title: 'Paths of Glory', value: 1957 },
  { title: 'Django Unchained', value: 2012 },
  { title: 'The Shining', value: 1980 },
  { title: 'WALL·E', value: 2008 },
  { title: 'American Beauty', value: 1999 },
  { title: 'The Dark Knight Rises', value: 2012 },
  { title: 'Princess Mononoke', value: 1997 },
  { title: 'Aliens', value: 1986 },
  { title: 'Oldboy', value: 2003 },
  { title: 'Once Upon a Time in America', value: 1984 },
  { title: 'Witness for the Prosecution', value: 1957 },
  { title: 'Das Boot', value: 1981 },
  { title: 'Citizen Kane', value: 1941 },
  { title: 'North by Northwest', value: 1959 },
  { title: 'Vertigo', value: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    value: 1983,
  },
  { title: 'Reservoir Dogs', value: 1992 },
  { title: 'Braveheart', value: 1995 },
  { title: 'M', value: 1931 },
  { title: 'Requiem for a Dream', value: 2000 },
  { title: 'Amélie', value: 2001 },
  { title: 'A Clockwork Orange', value: 1971 },
  { title: 'Like Stars on Earth', value: 2007 },
  { title: 'Taxi Driver', value: 1976 },
  { title: 'Lawrence of Arabia', value: 1962 },
  { title: 'Double Indemnity', value: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    value: 2004,
  },
  { title: 'Amadeus', value: 1984 },
  { title: 'To Kill a Mockingbird', value: 1962 },
  { title: 'Toy Story 3', value: 2010 },
  { title: 'Logan', value: 2017 },
  { title: 'Full Metal Jacket', value: 1987 },
  { title: 'Dangal', value: 2016 },
  { title: 'The Sting', value: 1973 },
  { title: '2001: A Space Odyssey', value: 1968 },
  { title: "Singin' in the Rain", value: 1952 },
  { title: 'Toy Story', value: 1995 },
  { title: 'Bicycle Thieves', value: 1948 },
  { title: 'The Kid', value: 1921 },
  { title: 'Inglourious Basterds', value: 2009 },
  { title: 'Snatch', value: 2000 },
  { title: '3 Idiots', value: 2009 },
  { title: 'Monty Python and the Holy Grail', value: 1975 },
];
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getStationsThunk())
  }, [])
  return (
    <div className="App">
      <Search<number> options={top100Films} onSelectionChange={(value) => {console.log(value)}} label={'Search Station'}/>
    </div>
  );
}

export default App;
