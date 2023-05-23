import {useState, useEffect} from 'react';
import {Box, Center, SimpleGrid, Flex, Text} from '@chakra-ui/react'
import {getData} from "../../api/getData"
import {getDataAll} from "../../api/getDataAll"
import { useQuery } from '@tanstack/react-query';
function MainComponent() {
    //const [data, setData] = useState([])
    const {data,isLoading, error} = 
    useQuery(["wear"],()=>getDataAll(), {initialData:{data:[]}})
    console.log(data)

    return (<> < Center > 
    
    <Flex w={"70vh"} h={"100vw"} flexDir={"column"}>
        <Text margin={"0 auto"}
        >

        </Text>
        

    </Flex>
</Center> </>
    );
}

export default MainComponent;