import React, { useEffect, useState } from 'react'
import { getInfoWor, getTemperaturWor, getWetterWor } from '../Services/klimaService'
import Klima from './Klima'

function Klimas(){

    const [info, setInfo] = useState([])

    const [wetter, setWetter] = useState([])

    const [temperatur, setTemperatur] = useState([])

    useEffect(
        () => {
            const ergebnis = async() =>{
                try{
                    const antwortData = await getInfoWor()
                    console.log(antwortData)
                    setInfo(antwortData)
                    const antwortData2 = await getWetterWor()
                    console.log(antwortData2.weather)
                    setWetter(antwortData2.weather)
                    const antwortData3 = await getTemperaturWor()
                    setTemperatur(antwortData3.main)
                }catch(e){
                    console.log(e)
                }
            } 
            ergebnis()
        }, []
    )

    return(
        <>
            {info.map(klima => <Klima name={klima.name} state={klima.state} country={klima.country} />)}
            <Klima temp={parseInt(temperatur.temp) + "ºC"} max={temperatur.max} min={temperatur.min} />
            {wetter.map(wetter => <Klima description={wetter.description} main={wetter.main} />)} 
        </>
    )

}

export default Klimas