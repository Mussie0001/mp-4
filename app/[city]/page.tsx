"use client";
import {useParams} from 'next/navigation';
import useSWR from 'swr';
import WeatherCard from '../components/weatherCard';
import styled from 'styled-components';
import {Weather} from '../interfaces/Weather';

const WeatherContentWrapper = styled.div`
    width: 80vw;
    margin: auto;
    background-color: aquamarine;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CityName = styled.h1`
    color: blueviolet;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
`

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: gold 5px solid;
    gap: 20px;
    justify-content: center;
`

export default function CityPage() {
    const params = useParams();
    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json()));

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i: number) => (
                        <WeatherCard
                            key={i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                            />
                    ))
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}
