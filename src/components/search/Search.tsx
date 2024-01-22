import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {SearchProps} from './types'

export default function Search<T>(props: SearchProps<T>) {
  const handleOnChange = (value: string | null) => {
    if (!value) {
        return 
    }
    const result = props.options.find(option => option.title === value)
    if (result) {

        props.onSelectionChange(result.value)
    }
  }  
  return (
      <Autocomplete
        id="free-solo-demo"
        options={props.options.map((option) => option.title)}
        renderInput={(params) => {console.log(params); return (<TextField {...params} label={props.label} />)}}
        onChange= {(event, value) => {handleOnChange(value)}}
      />
  );
}

