import {useState, useEffect} from 'react';
import {Box, Center, SimpleGrid, Flex, Text} from '@chakra-ui/react'
import {getData} from "../../api/getData"
import {useQuery} from '@tanstack/react-query';
function MainComponent() {
    //const [data, setData] = useState([])
    const {data, isLoading, error} = useQuery(["wear"], () => getData(), {
        initialData: {
            data: []
        }
    });
    console.log(data.data)

    /*useEffect(() => {
        getData().then((res) => {
            setData(res.data)
        })

    }, [])*/
    return (
        <> < Center > <Flex w={"40vh"} h={"100vh"} flexDir={"column"}>
            <Text margin={"0 auto"} lineHeight={"10vh"} fontSize={"2xl"}>무신사 랭킹</Text>
            <SimpleGrid columns={1} spacingY={5} padding={5}>
                {
                    isLoading
                        ? null
                        : data
                            .data
                            .map((item, index) => {
                                return (
                                    <Box height='100px' border="0.5px solid #e4e4e4" padding={3} shadow={"md"}>
                                        <Flex
                                            marginTop={3}
                                            height={"60px"}
                                            flexDir={"column"}
                                            justifyContent={"space-between"}>
                                            <Text
                                                w={"100%"}
                                                fontWeight={"bold"}
                                                whiteSpace={"nowrap"}
                                                overflow={"hidden"}
                                                textOverflow={"ellipsis"}>
                                                {item[3]}</Text>
                                            <Text>{item[4]}</Text>
                                        </Flex>
                                    </Box>
                                )
                            })
                }
            </SimpleGrid>
        </Flex> < /Center> </ >
    );
}

export default MainComponent;