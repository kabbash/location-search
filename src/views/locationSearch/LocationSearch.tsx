import Search from '../../components/search/Search'
import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getStationsThunk} from '../../store/slices/stations/thunks'
import {stationsOptionsSelector} from '../../store/slices/stations/selectors'
import Map from '../../components/map/Map'
import {Grid} from '@mui/material'

export default function LocationSearch() {
    const dispatch = useAppDispatch();
    const stationsOptions = useAppSelector(stationsOptionsSelector)
    const [selectedLocation, setSelectedLocation] = useState<{lat: number, lng: number} | null>(null)

    const handleSelectionChange = (value: {lat: number, lng: number}) => {
        setSelectedLocation(value)
    }

    useEffect(() => {
        dispatch(getStationsThunk())
    }, [])

    return (
        <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Search options={stationsOptions} label={'Search for a station'} onSelectionChange={handleSelectionChange}/>
              </Grid>
              <Grid item xs={12} md={8}>
                <Map location={selectedLocation}/>
              </Grid>
        </Grid>
    )
}