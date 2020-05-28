import React from "react";
import styled from "styled-components";
import { split, last, trim, get, words, head} from 'lodash';
import { dataKeys, newDataValues } from "../constants";
import data from "../data/top20_polluters.json";


const StyledPollutersDataContainer = styled.div``;

const reComposeString = (string) =>{
    let stringToArray = words(string);
    return `${stringToArray[0]}.${stringToArray[1]}`
}

const parseData = (data) => {
    return data.map((element)=>{
        let newData = newDataValues;
        if(get(element,'Name')){
            let nation = split(element.Name,',');
            newData['Company name'] = trim(head(nation));
            newData.nation = trim(last(nation));
        }

        if(get(element,dataKeys.GLOBAL_EMISSION_PAST)){
            if(element[dataKeys.GLOBAL_EMISSION_PAST].includes('tonnes of CO2')) {
                let geData = split(element[dataKeys.GLOBAL_EMISSION_PAST],'CO2');
                newData['CO2 tonnes 1965 - 2017'] = reComposeString(geData[0])
                if (geData[1]) {
                    newData.pollution_1965_2017_percent = reComposeString(geData[1]);
                }
            }
        }

        if(get(element,dataKeys.GLOBAL_EMISSION_FUTURE_2, false)){
            newData['CO2 tons increase in 2018 - 2030'] = reComposeString(element[dataKeys.GLOBAL_EMISSION_FUTURE_2])
        }

        if(get(element,dataKeys.GLOBAL_EMISSION_FUTURE_1, false)){
            newData['CO2 tons increase in 2018 - 2030'] = reComposeString(element[dataKeys.GLOBAL_EMISSION_FUTURE_1])
        }

        return {...element, ...newData}
    });
};

export const PollutersDataContainer = ({ children }) => {
    const parsedData = parseData(data);
    return (
        <StyledPollutersDataContainer>
            {children({data: parsedData})}
        </StyledPollutersDataContainer>
    );
};
